import { ENROLMENT_FIELDS } from './constants';

export type EnrolmentFormFields = {
  [ENROLMENT_FIELDS.CITY]: string;
  [ENROLMENT_FIELDS.DATE_OF_BIRTH]: Date | null;
  [ENROLMENT_FIELDS.EMAIL]: string;
  [ENROLMENT_FIELDS.EXTRA_INFO]: string;
  [ENROLMENT_FIELDS.MEMBERSHIP_NUMBER]: string;
  [ENROLMENT_FIELDS.NAME]: string;
  [ENROLMENT_FIELDS.NATIVE_LANGUAGE]: string;
  [ENROLMENT_FIELDS.NOTIFICATIONS]: string[];
  [ENROLMENT_FIELDS.PHONE_NUMBER]: string;
  [ENROLMENT_FIELDS.SERVICE_LANGUAGE]: string;
  [ENROLMENT_FIELDS.STREET_ADDRESS]: string;
  [ENROLMENT_FIELDS.ZIP]: string;
};
