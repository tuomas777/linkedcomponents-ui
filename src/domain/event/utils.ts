import formatDate from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import isFuture from 'date-fns/isFuture';
import isValid from 'date-fns/isValid';
import parseDate from 'date-fns/parse';
import reduce from 'lodash/reduce';
import * as Yup from 'yup';

import {
  CHARACTER_LIMITS,
  DATE_FORMAT,
  DATETIME_FORMAT,
  FORM_NAMES,
  WEEK_DAY,
} from '../../constants';
import { EventQueryVariables } from '../../generated/graphql';
import { OptionType, PathBuilderProps } from '../../types';
import queryBuilder from '../../utils/queryBuilder';
import {
  createArrayError,
  createNumberError,
  createStringError,
} from '../../utils/validationUtils';
import { VALIDATION_MESSAGE_KEYS } from '../app/i18n/constants';
import {
  ADD_IMAGE_FIELDS,
  EMPTY_MULTI_LANGUAGE_OBJECT,
  EVENT_FIELDS,
  EXTENSION_COURSE_FIELDS,
  RECURRING_EVENT_FIELDS,
} from './constants';
import { EventTime, Offer } from './types';

const createMultiLanguageValidation = (
  languages: string[],
  rule: Yup.Schema<string | null | undefined>
) => {
  return Yup.object().shape(
    reduce(languages, (acc, lang) => ({ ...acc, [lang]: rule }), {})
  );
};

const createMultiLanguageValidationByInfoLanguages = (
  rule: Yup.Schema<string | null | undefined>
) => {
  return Yup.object().when(
    [EVENT_FIELDS.EVENT_INFO_LANGUAGES],
    (languages: string[]) => createMultiLanguageValidation(languages, rule)
  );
};

const createExtensionCourseValidation = () => {
  return Yup.object().shape({
    [EXTENSION_COURSE_FIELDS.MINIMUM_ATTENDEE_CAPACITY]: Yup.number()
      .nullable(true)
      .min(0, (param) =>
        createNumberError(param, VALIDATION_MESSAGE_KEYS.NUMBER_MIN)
      ),
    [EXTENSION_COURSE_FIELDS.MAXIMUM_ATTENDEE_CAPACITY]: Yup.number().when(
      [EXTENSION_COURSE_FIELDS.MINIMUM_ATTENDEE_CAPACITY],
      (minimumAttendeeCapacity: number) => {
        return Yup.number()
          .nullable(true)
          .min(minimumAttendeeCapacity || 0, (param) =>
            createNumberError(param, VALIDATION_MESSAGE_KEYS.NUMBER_MIN)
          );
      }
    ),
    [EXTENSION_COURSE_FIELDS.ENROLMENT_START_TIME]: Yup.date()
      .typeError(VALIDATION_MESSAGE_KEYS.DATE)
      .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
      .test('isInTheFuture', VALIDATION_MESSAGE_KEYS.DATE_FUTURE, (startTime) =>
        startTime ? isFuture(startTime) : true
      ),
    [EXTENSION_COURSE_FIELDS.ENROLMENT_END_TIME]: Yup.date()
      .typeError(VALIDATION_MESSAGE_KEYS.DATE)
      .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
      .test('isInTheFuture', VALIDATION_MESSAGE_KEYS.DATE_FUTURE, (endTime) =>
        endTime ? isFuture(endTime) : true
      )
      // test that startsTime is before endsTime
      .when(
        [EXTENSION_COURSE_FIELDS.ENROLMENT_START_TIME],
        (startTime: Date | null, schema: Yup.DateSchema) => {
          if (startTime && isValid(startTime)) {
            return schema.test(
              'isBeforeStartTime',
              () => ({
                key: VALIDATION_MESSAGE_KEYS.DATE_MIN,
                min: formatDate(startTime, DATETIME_FORMAT),
              }),
              (endTime) => {
                return endTime ? isBefore(startTime, endTime) : true;
              }
            );
          }
          return schema;
        }
      ),
  });
};

const eventTimeValidation = {
  [EVENT_FIELDS.START_TIME]: Yup.date()
    .typeError(VALIDATION_MESSAGE_KEYS.DATE)
    .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
    .test('isInTheFuture', VALIDATION_MESSAGE_KEYS.DATE_FUTURE, (startTime) =>
      startTime ? isFuture(startTime) : true
    ),
  [EVENT_FIELDS.END_TIME]: Yup.date()
    .typeError(VALIDATION_MESSAGE_KEYS.DATE)
    .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
    // test that startsTime is before endsTime
    .when(
      [EVENT_FIELDS.START_TIME],
      (startTime: Date | null, schema: Yup.DateSchema) => {
        if (startTime && isValid(startTime)) {
          return schema.test(
            'isBeforeStartTime',
            () => ({
              key: VALIDATION_MESSAGE_KEYS.DATE_AFTER,
              after: formatDate(startTime, DATETIME_FORMAT),
            }),
            (endTime) => {
              return endTime ? isBefore(startTime, endTime) : true;
            }
          );
        }
        return schema;
      }
    ),
};

export const createEventValidationSchema = () => {
  return Yup.object().shape({
    [EVENT_FIELDS.TYPE]: Yup.string().required(
      VALIDATION_MESSAGE_KEYS.STRING_REQUIRED
    ),
    [EVENT_FIELDS.UMBRELLA_EVENT]: Yup.string()
      .nullable()
      .when([EVENT_FIELDS.HAS_UMBRELLA], {
        is: (value) => value,
        then: Yup.string().required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED),
      }),
    [EVENT_FIELDS.NAME]: createMultiLanguageValidationByInfoLanguages(
      Yup.string().required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
    ),
    [EVENT_FIELDS.INFO_URL]: createMultiLanguageValidationByInfoLanguages(
      Yup.string().url(VALIDATION_MESSAGE_KEYS.URL)
    ),
    [EVENT_FIELDS.DESCRIPTION]: createMultiLanguageValidationByInfoLanguages(
      Yup.string()
        .required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
        .max(CHARACTER_LIMITS.LONG_STRING, (param) =>
          createStringError(param, VALIDATION_MESSAGE_KEYS.STRING_MAX)
        )
    ),
    [EVENT_FIELDS.SHORT_DESCRIPTION]: createMultiLanguageValidationByInfoLanguages(
      Yup.string()
        .required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
        .max(CHARACTER_LIMITS.SHORT_STRING, (param) =>
          createStringError(param, VALIDATION_MESSAGE_KEYS.STRING_MAX)
        )
    ),
    ...eventTimeValidation,
    [EVENT_FIELDS.EVENT_TIMES]: Yup.array().of(
      Yup.object().shape({ ...eventTimeValidation })
    ),
    [EVENT_FIELDS.LOCATION]: Yup.string()
      .nullable()
      .required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED),
    [EVENT_FIELDS.LOCATION_EXTRA_INFO]: createMultiLanguageValidationByInfoLanguages(
      Yup.string().max(CHARACTER_LIMITS.SHORT_STRING, (param) =>
        createStringError(param, VALIDATION_MESSAGE_KEYS.STRING_MAX)
      )
    ),
    [EVENT_FIELDS.OFFERS]: Yup.array().when(
      [EVENT_FIELDS.HAS_PRICE, EVENT_FIELDS.EVENT_INFO_LANGUAGES],
      (
        hasPrice: boolean,
        eventInfoLanguage: string[],
        schema: Yup.ArraySchema<any>
      ) => {
        return hasPrice
          ? Yup.array().of(
              Yup.object().shape({
                [EVENT_FIELDS.OFFER_DESCRIPTION]: createMultiLanguageValidation(
                  eventInfoLanguage,
                  Yup.string().required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
                ),
                [EVENT_FIELDS.OFFER_INFO_URL]: createMultiLanguageValidation(
                  eventInfoLanguage,
                  Yup.string()
                    .required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
                    .url(VALIDATION_MESSAGE_KEYS.URL)
                ),
                [EVENT_FIELDS.OFFER_PRICE]: createMultiLanguageValidation(
                  eventInfoLanguage,
                  Yup.string().required(VALIDATION_MESSAGE_KEYS.STRING_REQUIRED)
                ),
              })
            )
          : schema;
      }
    ),
    [EVENT_FIELDS.FACEBOOK_URL]: Yup.string().url(VALIDATION_MESSAGE_KEYS.URL),
    [EVENT_FIELDS.TWITTER_URL]: Yup.string().url(VALIDATION_MESSAGE_KEYS.URL),
    [EVENT_FIELDS.INSTAGRAM_URL]: Yup.string().url(VALIDATION_MESSAGE_KEYS.URL),
    [EVENT_FIELDS.KEYWORDS]: Yup.array()
      .required(VALIDATION_MESSAGE_KEYS.ARRAY_REQUIRED)
      .min(1, (param) =>
        createArrayError(param, VALIDATION_MESSAGE_KEYS.ARRAY_MIN)
      ),
    [EVENT_FIELDS.AUDIENCE_MIN_AGE]: Yup.number()
      .nullable(true)
      .min(0, (param) =>
        createNumberError(param, VALIDATION_MESSAGE_KEYS.NUMBER_MIN)
      ),
    [EVENT_FIELDS.AUDIENCE_MAX_AGE]: Yup.number().when(
      [EVENT_FIELDS.AUDIENCE_MIN_AGE],
      (audienceMinAge: number) => {
        return Yup.number()
          .nullable(true)
          .min(audienceMinAge || 0, (param) =>
            createNumberError(param, VALIDATION_MESSAGE_KEYS.NUMBER_MIN)
          );
      }
    ),
    [EVENT_FIELDS.EXTENSION_COURSE]: createExtensionCourseValidation(),
  });
};

export const isValidTime = (time: string) =>
  /^(([01][0-9])|(2[0-3]))(:|\.)[0-5][0-9]$/.test(time);

export const createRecurringEventValidationSchema = () => {
  return Yup.object().shape({
    [RECURRING_EVENT_FIELDS.REPEAT_INTERVAL]: Yup.string().required(
      VALIDATION_MESSAGE_KEYS.STRING_REQUIRED
    ),
    [RECURRING_EVENT_FIELDS.REPEAT_DAYS]: Yup.array()
      .required(VALIDATION_MESSAGE_KEYS.ARRAY_REQUIRED)
      .min(1, (param) =>
        createArrayError(param, VALIDATION_MESSAGE_KEYS.ARRAY_MIN)
      ),
    [RECURRING_EVENT_FIELDS.START_DATE]: Yup.date()
      .typeError(VALIDATION_MESSAGE_KEYS.DATE)
      .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
      .test('isInTheFuture', VALIDATION_MESSAGE_KEYS.DATE_FUTURE, (startTime) =>
        startTime ? isFuture(startTime) : true
      ),
    [RECURRING_EVENT_FIELDS.END_DATE]: Yup.date()
      .typeError(VALIDATION_MESSAGE_KEYS.DATE)
      .required(VALIDATION_MESSAGE_KEYS.DATE_REQUIRED)
      // test that startsTime is before endsTime
      .when(
        [RECURRING_EVENT_FIELDS.START_DATE],
        (startDate: Date | null, schema: Yup.DateSchema) => {
          if (startDate && isValid(startDate)) {
            return schema.test(
              'isBeforeStartDate',
              () => ({
                key: VALIDATION_MESSAGE_KEYS.DATE_AFTER,
                after: formatDate(startDate, DATE_FORMAT),
              }),
              (endDate) => {
                return endDate ? isBefore(startDate, endDate) : true;
              }
            );
          }
          return schema;
        }
      ),
    [RECURRING_EVENT_FIELDS.START_TIME]: Yup.string()
      .required(VALIDATION_MESSAGE_KEYS.TIME_REQUIRED)
      .test(
        'isValidTime',
        VALIDATION_MESSAGE_KEYS.TIME,
        (value) => !!value && isValidTime(value)
      ),
    [RECURRING_EVENT_FIELDS.END_TIME]: Yup.string()
      .required(VALIDATION_MESSAGE_KEYS.TIME_REQUIRED)
      .test(
        'isValidTime',
        VALIDATION_MESSAGE_KEYS.TIME,
        (value) => !!value && isValidTime(value)
      )
      // test that startsAt is before endsAt time
      .when(
        [RECURRING_EVENT_FIELDS.START_TIME],
        (startsAt: string, schema: Yup.StringSchema) => {
          if (isValidTime(startsAt)) {
            return schema.test(
              'isBeforeStartTime',
              () => ({
                key: VALIDATION_MESSAGE_KEYS.TIME_AFTER,
                after: startsAt,
              }),
              (endsAt) => {
                if (endsAt && isValidTime(endsAt)) {
                  const modifiedStartsAt = startsAt.replace(':', '.');
                  const modifiedEndsAt = endsAt.replace(':', '.');

                  return isBefore(
                    parseDate(modifiedStartsAt, 'HH.mm', new Date()),
                    parseDate(modifiedEndsAt, 'HH.mm', new Date())
                  );
                }
                return true;
              }
            );
          }
          return schema;
        }
      ),
  });
};

export const createAddImageValidationSchema = () => {
  return Yup.object().shape(
    {
      [ADD_IMAGE_FIELDS.SELECTED_IMAGE]: Yup.array().when(
        [ADD_IMAGE_FIELDS.URL],
        (url: string, schema: Yup.ArraySchema<string>) => {
          return url ? schema.min(0) : schema.min(1);
        }
      ),
      [ADD_IMAGE_FIELDS.URL]: Yup.string().when(
        [ADD_IMAGE_FIELDS.SELECTED_IMAGE],
        (ids: string[], schema: Yup.StringSchema) => {
          return ids.length ? schema : schema.url(VALIDATION_MESSAGE_KEYS.URL);
        }
      ),
    },
    [[ADD_IMAGE_FIELDS.SELECTED_IMAGE, ADD_IMAGE_FIELDS.URL]]
  );
};

export const eventPathBuilder = ({
  args,
}: PathBuilderProps<EventQueryVariables>) => {
  const { id, include } = args;
  const variableToKeyItems = [{ key: 'include', value: include }];

  const query = queryBuilder(variableToKeyItems);

  return `/event/${id}/${query}`;
};

const weekDayWeight = (day: WEEK_DAY): number => {
  switch (day) {
    case WEEK_DAY.MON:
      return 0;
    case WEEK_DAY.TUE:
      return 1;
    case WEEK_DAY.WED:
      return 2;
    case WEEK_DAY.THU:
      return 3;
    case WEEK_DAY.FRI:
      return 4;
    case WEEK_DAY.SAT:
      return 5;
    case WEEK_DAY.SUN:
      return 6;
  }
};

export const sortWeekDays = (a: string, b: string) =>
  weekDayWeight(a as WEEK_DAY) - weekDayWeight(b as WEEK_DAY);

const languageWeight = (lang: string): number => {
  switch (lang) {
    case 'fi':
      return 1;
    case 'sv':
      return 2;
    case 'en':
      return 3;
    default:
      return 4;
  }
};

export const sortLanguage = (a: OptionType, b: OptionType) =>
  languageWeight(a.value) - languageWeight(b.value);

export const getEmptyEventTime = (): EventTime => {
  return {
    [EVENT_FIELDS.END_TIME]: null,
    [EVENT_FIELDS.START_TIME]: null,
  };
};

export const getEmptyOffer = (): Offer => {
  return {
    [EVENT_FIELDS.OFFER_DESCRIPTION]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
    [EVENT_FIELDS.OFFER_INFO_URL]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
    [EVENT_FIELDS.OFFER_PRICE]: { ...EMPTY_MULTI_LANGUAGE_OBJECT },
  };
};

export const clearEventFormData = () => {
  sessionStorage.removeItem(FORM_NAMES.EVENT_FORM);
};
