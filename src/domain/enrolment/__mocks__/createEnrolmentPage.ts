import { MockedResponse } from '@apollo/client/testing';

import { CreateEnrolmentDocument } from '../../../generated/graphql';
import { fakeEnrolment } from '../../../utils/mockDataUtils';
import { registrationId } from '../../registration/__mocks__/registration';

const enrolmentValues = {
  city: 'City',
  email: 'participant@email.com',
  name: 'Participant name',
  phone: '+358 44 123 4567',
  streetAddress: 'Street address',
  zip: '00100',
};

const payload = {
  city: enrolmentValues.city,
  email: enrolmentValues.email,
  extraInfo: null,
  membershipNumber: null,
  name: enrolmentValues.name,
  notifications: 3,
  phoneNumber: enrolmentValues.phone,
  registration: registrationId,
};

const createEnrolmentVariables = {
  input: payload,
};

const createEnrolmentResponse = {
  data: { createEnrolment: fakeEnrolment() },
};

const mockedCreateEnrolmentResponse: MockedResponse = {
  request: {
    query: CreateEnrolmentDocument,
    variables: createEnrolmentVariables,
  },
  result: createEnrolmentResponse,
};

const mockedInvalidCreateEnrolmentResponse: MockedResponse = {
  request: {
    query: CreateEnrolmentDocument,
    variables: createEnrolmentVariables,
  },
  error: {
    ...new Error(),
    result: {
      name: ['Tämän kentän arvo ei voi olla "null".'],
    },
  } as Error,
};

export {
  enrolmentValues,
  mockedCreateEnrolmentResponse,
  mockedInvalidCreateEnrolmentResponse,
};
