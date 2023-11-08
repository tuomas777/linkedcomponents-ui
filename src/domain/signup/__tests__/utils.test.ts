import { SignupInput } from '../../../generated/graphql';
import { fakeSignup } from '../../../utils/mockDataUtils';
import { registration } from '../../registration/__mocks__/registration';
import {
  NOTIFICATION_TYPE,
  NOTIFICATIONS,
  SIGNUP_GROUP_INITIAL_VALUES,
} from '../../signupGroup/constants';
import { TEST_CONTACT_PERSON_ID, TEST_SIGNUP_ID } from '../constants';
import {
  getSignupGroupInitialValuesFromSignup,
  getUpdateSignupPayload,
  omitSensitiveDataFromSignupPayload,
} from '../utils';

describe('getUpdateSignupPayload function', () => {
  it('should return payload to update a signup', () => {
    expect(
      getUpdateSignupPayload({
        formValues: SIGNUP_GROUP_INITIAL_VALUES,
        id: TEST_SIGNUP_ID,
        registration,
      })
    ).toEqual({
      city: '',
      dateOfBirth: null,
      email: null,
      extraInfo: '',
      firstName: '',
      id: TEST_SIGNUP_ID,
      lastName: '',
      membershipNumber: '',
      nativeLanguage: null,
      notifications: NOTIFICATION_TYPE.EMAIL,
      phoneNumber: null,
      registration: registration.id,
      responsibleForGroup: false,
      serviceLanguage: null,
      streetAddress: null,
      zipcode: null,
    });

    const city = 'City',
      contactPersonFirstName = 'Contact first name',
      contactPersonLastName = 'Contact last name',
      dateOfBirth = new Date('1999-10-10'),
      email = 'Email',
      extraInfo = 'Extra info',
      firstName = 'First name',
      lastName = 'Last name',
      membershipNumber = 'XXX-123',
      nativeLanguage = 'fi',
      notifications = [NOTIFICATIONS.EMAIL],
      phoneNumber = '0441234567',
      serviceLanguage = 'sv',
      streetAddress = 'Street address',
      zipcode = '00100';
    const signups = [
      {
        city,
        dateOfBirth,
        extraInfo,
        firstName,
        id: null,
        inWaitingList: false,
        lastName,
        responsibleForGroup: true,
        streetAddress,
        zipcode,
      },
    ];
    const payload = getUpdateSignupPayload({
      formValues: {
        ...SIGNUP_GROUP_INITIAL_VALUES,
        contactPerson: {
          email,
          firstName: contactPersonFirstName,
          id: TEST_CONTACT_PERSON_ID,
          lastName: contactPersonLastName,
          membershipNumber,
          nativeLanguage,
          notifications,
          phoneNumber,
          serviceLanguage,
        },

        extraInfo: '',

        signups,
      },
      id: TEST_SIGNUP_ID,
      registration,
    });

    expect(payload).toEqual({
      city,
      dateOfBirth: '1999-10-10',
      email,
      extraInfo,
      firstName,
      id: TEST_SIGNUP_ID,
      lastName,
      membershipNumber,
      nativeLanguage,
      notifications: NOTIFICATION_TYPE.EMAIL,
      phoneNumber,
      registration: registration.id,
      responsibleForGroup: true,
      serviceLanguage,
      streetAddress,
      zipcode,
    });
  });
});

describe('getSignupGroupInitialValuesFromSignup function', () => {
  it('should return default values if value is not set', () => {
    const {
      contactPerson: {
        email,
        membershipNumber,
        nativeLanguage,
        notifications,
        phoneNumber,
        serviceLanguage,
      },
      extraInfo,
      signups,
    } = getSignupGroupInitialValuesFromSignup(
      fakeSignup({
        city: null,
        contactPerson: {
          email: null,
          firstName: null,
          id: TEST_CONTACT_PERSON_ID,
          membershipNumber: null,
          nativeLanguage: null,
          notifications: NOTIFICATION_TYPE.EMAIL,
          phoneNumber: null,
          serviceLanguage: null,
        },
        dateOfBirth: null,
        extraInfo: null,
        firstName: null,
        id: TEST_SIGNUP_ID,
        lastName: null,
        responsibleForGroup: true,
        streetAddress: null,
        zipcode: null,
      })
    );

    expect(signups).toEqual([
      {
        city: '',
        dateOfBirth: null,
        extraInfo: '',
        firstName: '',
        id: TEST_SIGNUP_ID,
        inWaitingList: false,
        lastName: '',
        responsibleForGroup: true,
        streetAddress: '',
        zipcode: '',
      },
    ]);
    expect(email).toBe('');
    expect(extraInfo).toBe('');
    expect(membershipNumber).toBe('');
    expect(nativeLanguage).toBe('');
    expect(notifications).toEqual([NOTIFICATIONS.EMAIL]);
    expect(phoneNumber).toBe('');
    expect(serviceLanguage).toBe('');
  });

  it('should return signup group initial values', () => {
    const expectedCity = 'City';
    const expectedDateOfBirth = new Date('2021-10-10');
    const expectedEmail = 'user@email.com';
    const expectedExtraInfo = 'Extra info';
    const expectedFirstName = 'First name';
    const expectedLastName = 'Last name';
    const expectedMembershipNumber = 'XXX-XXX-XXX';
    const expectedNativeLanguage = 'fi';
    const expectedNotifications = [NOTIFICATIONS.EMAIL];
    const expectedPhoneNumber = '+358 44 123 4567';
    const expectedServiceLanguage = 'sv';
    const expectedStreetAddress = 'Test address';
    const expectedZip = '12345';

    const {
      contactPerson: {
        email,
        membershipNumber,
        nativeLanguage,
        notifications,
        phoneNumber,
        serviceLanguage,
      },

      extraInfo,

      signups,
    } = getSignupGroupInitialValuesFromSignup(
      fakeSignup({
        city: expectedCity,
        contactPerson: {
          email: expectedEmail,
          id: TEST_CONTACT_PERSON_ID,
          membershipNumber: expectedMembershipNumber,
          nativeLanguage: expectedNativeLanguage,
          notifications: NOTIFICATION_TYPE.EMAIL,
          phoneNumber: expectedPhoneNumber,
          serviceLanguage: expectedServiceLanguage,
        },
        dateOfBirth: '2021-10-10',
        extraInfo: expectedExtraInfo,
        firstName: expectedFirstName,
        id: TEST_SIGNUP_ID,
        lastName: expectedLastName,
        responsibleForGroup: true,
        streetAddress: expectedStreetAddress,
        zipcode: expectedZip,
      })
    );

    expect(signups).toEqual([
      {
        city: expectedCity,
        dateOfBirth: expectedDateOfBirth,
        extraInfo: expectedExtraInfo,
        firstName: expectedFirstName,
        id: TEST_SIGNUP_ID,
        inWaitingList: false,
        lastName: expectedLastName,
        responsibleForGroup: true,
        streetAddress: expectedStreetAddress,
        zipcode: expectedZip,
      },
    ]);
    expect(email).toBe(expectedEmail);
    expect(extraInfo).toBe('');
    expect(membershipNumber).toBe(expectedMembershipNumber);
    expect(nativeLanguage).toBe(expectedNativeLanguage);
    expect(notifications).toEqual(expectedNotifications);
    expect(phoneNumber).toBe(expectedPhoneNumber);
    expect(serviceLanguage).toBe(expectedServiceLanguage);
  });
});

describe('omitSensitiveDataFromSignupPayload', () => {
  it('should omit sensitive data from payload', () => {
    const payload: SignupInput = {
      city: 'Helsinki',
      dateOfBirth: '1999-10-10',
      email: 'test@email.com',
      extraInfo: 'Signup entra info',
      firstName: 'First name',
      id: '1',
      lastName: 'Last name',
      membershipNumber: 'XYZ',
      nativeLanguage: 'fi',
      notifications: NOTIFICATION_TYPE.EMAIL,
      phoneNumber: '0441234567',
      responsibleForGroup: true,
      serviceLanguage: 'fi',
      streetAddress: 'Address',
      zipcode: '123456',
    };

    const filteredPayload = omitSensitiveDataFromSignupPayload(
      payload
    ) as SignupInput;
    expect(filteredPayload).toEqual({
      id: '1',
      notifications: NOTIFICATION_TYPE.EMAIL,
      responsibleForGroup: true,
    });
    expect(filteredPayload.city).toBeUndefined();
    expect(filteredPayload.extraInfo).toBeUndefined();
    expect(filteredPayload.email).toBeUndefined();
    expect(filteredPayload.extraInfo).toBeUndefined();
    expect(filteredPayload.firstName).toBeUndefined();
    expect(filteredPayload.lastName).toBeUndefined();
    expect(filteredPayload.membershipNumber).toBeUndefined();
    expect(filteredPayload.nativeLanguage).toBeUndefined();
    expect(filteredPayload.phoneNumber).toBeUndefined();
    expect(filteredPayload.serviceLanguage).toBeUndefined();
    expect(filteredPayload.streetAddress).toBeUndefined();
    expect(filteredPayload.zipcode).toBeUndefined();
  });
});
