import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
};

export enum AttendeeStatus {
  Attending = 'attending',
  Waitlisted = 'waitlisted'
}

export type CreateEnrolmentMutationInput = {
  registration?: InputMaybe<Scalars['String']>;
  reservationCode?: InputMaybe<Scalars['String']>;
  signups?: InputMaybe<Array<SignupInput>>;
};

export type CreateEnrolmentResponse = {
  __typename?: 'CreateEnrolmentResponse';
  attending?: Maybe<EnrolmentPeopleResponse>;
  waitlisted?: Maybe<EnrolmentPeopleResponse>;
};

export type CreateEventMutationInput = {
  audience?: InputMaybe<Array<IdObjectInput>>;
  audienceMaxAge?: InputMaybe<Scalars['Int']>;
  audienceMinAge?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<LocalisedObjectInput>;
  endTime?: InputMaybe<Scalars['String']>;
  enrolmentEndTime?: InputMaybe<Scalars['String']>;
  enrolmentStartTime?: InputMaybe<Scalars['String']>;
  environment?: InputMaybe<Scalars['String']>;
  environmentalCertificate?: InputMaybe<Scalars['String']>;
  eventStatus?: InputMaybe<EventStatus>;
  externalLinks?: InputMaybe<Array<InputMaybe<ExternalLinkInput>>>;
  images?: InputMaybe<Array<IdObjectInput>>;
  inLanguage?: InputMaybe<Array<IdObjectInput>>;
  infoUrl?: InputMaybe<LocalisedObjectInput>;
  keywords?: InputMaybe<Array<IdObjectInput>>;
  location?: InputMaybe<IdObjectInput>;
  locationExtraInfo?: InputMaybe<LocalisedObjectInput>;
  maximumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  minimumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<LocalisedObjectInput>;
  offers?: InputMaybe<Array<OfferInput>>;
  provider?: InputMaybe<LocalisedObjectInput>;
  publicationStatus?: InputMaybe<PublicationStatus>;
  publisher?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<LocalisedObjectInput>;
  startTime?: InputMaybe<Scalars['String']>;
  subEvents?: InputMaybe<Array<IdObjectInput>>;
  superEvent?: InputMaybe<IdObjectInput>;
  superEventType?: InputMaybe<SuperEventType>;
  typeId?: InputMaybe<EventTypeId>;
  userConsent?: InputMaybe<Scalars['Boolean']>;
  userEmail?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
  userOrganization?: InputMaybe<Scalars['String']>;
  userPhoneNumber?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<VideoInput>>>;
};

export type CreateKeywordMutationInput = {
  dataSource?: InputMaybe<Scalars['String']>;
  deprecated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<LocalisedObjectInput>;
  publisher?: InputMaybe<Scalars['String']>;
  replacedBy?: InputMaybe<Scalars['String']>;
};

export type CreateKeywordSetMutationInput = {
  dataSource?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<IdObjectInput>>;
  name?: InputMaybe<LocalisedObjectInput>;
  organization?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<Scalars['String']>;
};

export type CreateOrganizationMutationInput = {
  adminUsers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  affiliatedOrganizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  classification?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  dissolutionDate?: InputMaybe<Scalars['String']>;
  foundingDate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  internalType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  originId?: InputMaybe<Scalars['String']>;
  parentOrganization?: InputMaybe<Scalars['String']>;
  regularUsers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  replacedBy?: InputMaybe<Scalars['String']>;
  subOrganizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreatePlaceMutationInput = {
  addressLocality?: InputMaybe<LocalisedObjectInput>;
  addressRegion?: InputMaybe<Scalars['String']>;
  contactType?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<LocalisedObjectInput>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoUrl?: InputMaybe<LocalisedObjectInput>;
  name?: InputMaybe<LocalisedObjectInput>;
  originId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<PositionInput>;
  postOfficeBoxNum?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<LocalisedObjectInput>;
  telephone?: InputMaybe<LocalisedObjectInput>;
};

export type CreateRegistrationMutationInput = {
  audienceMaxAge?: InputMaybe<Scalars['Int']>;
  audienceMinAge?: InputMaybe<Scalars['Int']>;
  confirmationMessage?: InputMaybe<LocalisedObjectInput>;
  enrolmentEndTime?: InputMaybe<Scalars['String']>;
  enrolmentStartTime?: InputMaybe<Scalars['String']>;
  event: IdObjectInput;
  instructions?: InputMaybe<LocalisedObjectInput>;
  mandatoryFields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maximumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  maximumGroupSize?: InputMaybe<Scalars['Int']>;
  minimumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  registrationUserAccesses?: InputMaybe<Array<InputMaybe<RegistrationUserAccessInput>>>;
  waitingListCapacity?: InputMaybe<Scalars['Int']>;
};

export type CreateSeatsReservationMutationInput = {
  registration: Scalars['ID'];
  seats: Scalars['Int'];
};

export type DataSource = {
  __typename?: 'DataSource';
  apiKey?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  createPastEvents?: Maybe<Scalars['Boolean']>;
  editPastEvents?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  userEditable?: Maybe<Scalars['Boolean']>;
};

export type DataSourcesResponse = {
  __typename?: 'DataSourcesResponse';
  data: Array<Maybe<DataSource>>;
  meta: Meta;
};

export type Division = {
  __typename?: 'Division';
  municipality?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  ocdId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Enrolment = {
  __typename?: 'Enrolment';
  attendeeStatus?: Maybe<AttendeeStatus>;
  cancellationCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  extraInfo?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  membershipNumber?: Maybe<Scalars['String']>;
  nativeLanguage?: Maybe<Scalars['String']>;
  notifications?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  presenceStatus?: Maybe<PresenceStatus>;
  registration?: Maybe<Scalars['ID']>;
  serviceLanguage?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type EnrolmentPeopleResponse = {
  __typename?: 'EnrolmentPeopleResponse';
  count?: Maybe<Scalars['Int']>;
  people?: Maybe<Array<Enrolment>>;
};

export type EnrolmentsResponse = {
  __typename?: 'EnrolmentsResponse';
  data: Array<Enrolment>;
  meta: Meta;
};

export type Event = {
  __typename?: 'Event';
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  audience: Array<Maybe<Keyword>>;
  audienceMaxAge?: Maybe<Scalars['Int']>;
  audienceMinAge?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
  description?: Maybe<LocalisedObject>;
  endTime?: Maybe<Scalars['String']>;
  enrolmentEndTime?: Maybe<Scalars['String']>;
  enrolmentStartTime?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  environmentalCertificate?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<EventStatus>;
  extensionCourse?: Maybe<ExtensionCourse>;
  externalLinks: Array<Maybe<ExternalLink>>;
  id: Scalars['ID'];
  images: Array<Maybe<Image>>;
  inLanguage: Array<Maybe<Language>>;
  infoUrl?: Maybe<LocalisedObject>;
  keywords: Array<Maybe<Keyword>>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  location?: Maybe<Place>;
  locationExtraInfo?: Maybe<LocalisedObject>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalisedObject>;
  offers: Array<Maybe<Offer>>;
  provider?: Maybe<LocalisedObject>;
  providerContactInfo?: Maybe<Scalars['String']>;
  publicationStatus?: Maybe<PublicationStatus>;
  publisher?: Maybe<Scalars['ID']>;
  registration?: Maybe<IdObject>;
  shortDescription?: Maybe<LocalisedObject>;
  startTime?: Maybe<Scalars['String']>;
  subEvents: Array<Maybe<Event>>;
  superEvent?: Maybe<Event>;
  superEventType?: Maybe<SuperEventType>;
  typeId?: Maybe<EventTypeId>;
  userConsent?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  userOrganization?: Maybe<Scalars['String']>;
  userPhoneNumber?: Maybe<Scalars['String']>;
  videos: Array<Maybe<Video>>;
};

export enum EventStatus {
  EventCancelled = 'EventCancelled',
  EventPostponed = 'EventPostponed',
  EventRescheduled = 'EventRescheduled',
  EventScheduled = 'EventScheduled'
}

export enum EventTypeId {
  Course = 'Course',
  General = 'General',
  Volunteering = 'Volunteering'
}

export type EventsResponse = {
  __typename?: 'EventsResponse';
  data: Array<Maybe<Event>>;
  meta: Meta;
};

export type ExtensionCourse = {
  __typename?: 'ExtensionCourse';
  enrolmentEndTime?: Maybe<Scalars['String']>;
  enrolmentStartTime?: Maybe<Scalars['String']>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ExternalLinkInput = {
  language?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  body?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type FeedbackInput = {
  body?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type IdObject = {
  __typename?: 'IdObject';
  atId?: Maybe<Scalars['String']>;
};

export type IdObjectInput = {
  atId: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<LocalisedObject>;
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  cropping?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photographerName?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagesResponse = {
  __typename?: 'ImagesResponse';
  data: Array<Maybe<Image>>;
  meta: Meta;
};

export type Keyword = {
  __typename?: 'Keyword';
  aggregate?: Maybe<Scalars['Boolean']>;
  altLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Image>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  nEvents?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalisedObject>;
  publisher?: Maybe<Scalars['ID']>;
  replacedBy?: Maybe<Scalars['String']>;
};

export type KeywordSet = {
  __typename?: 'KeywordSet';
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Image>;
  keywords?: Maybe<Array<Maybe<Keyword>>>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
  organization?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
};

export type KeywordSetsResponse = {
  __typename?: 'KeywordSetsResponse';
  data: Array<Maybe<KeywordSet>>;
  meta: Meta;
};

export type KeywordsResponse = {
  __typename?: 'KeywordsResponse';
  data: Array<Maybe<Keyword>>;
  meta: Meta;
};

export type Language = {
  __typename?: 'Language';
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<LocalisedObject>;
  serviceLanguage?: Maybe<Scalars['Boolean']>;
  translationAvailable?: Maybe<Scalars['Boolean']>;
};

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  data: Array<Maybe<Language>>;
  meta: Meta;
};

export type LocalisedObject = {
  __typename?: 'LocalisedObject';
  ar?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  zhHans?: Maybe<Scalars['String']>;
};

export type LocalisedObjectInput = {
  ar?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  fi?: InputMaybe<Scalars['String']>;
  ru?: InputMaybe<Scalars['String']>;
  sv?: InputMaybe<Scalars['String']>;
  zhHans?: InputMaybe<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  count: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEnrolment: CreateEnrolmentResponse;
  createEvent: Event;
  createEvents: Array<Event>;
  createKeyword: Keyword;
  createKeywordSet: KeywordSet;
  createOrganization: Organization;
  createPlace: Place;
  createRegistration: Registration;
  createSeatsReservation: SeatsReservation;
  deleteEnrolment?: Maybe<NoContent>;
  deleteEvent?: Maybe<NoContent>;
  deleteImage?: Maybe<NoContent>;
  deleteKeyword?: Maybe<NoContent>;
  deleteKeywordSet?: Maybe<NoContent>;
  deleteOrganization?: Maybe<NoContent>;
  deletePlace?: Maybe<NoContent>;
  deleteRegistration?: Maybe<NoContent>;
  postFeedback?: Maybe<Feedback>;
  postGuestFeedback?: Maybe<Feedback>;
  sendMessage?: Maybe<SendMessageResponse>;
  sendRegistrationUserAccessInvitation?: Maybe<NoContent>;
  updateEnrolment: Enrolment;
  updateEvent: Event;
  updateEvents: Array<Event>;
  updateImage: Image;
  updateKeyword: Keyword;
  updateKeywordSet: KeywordSet;
  updateOrganization: Organization;
  updatePlace: Place;
  updateRegistration: Registration;
  updateSeatsReservation: SeatsReservation;
  uploadImage: Image;
};


export type MutationCreateEnrolmentArgs = {
  input: CreateEnrolmentMutationInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventMutationInput;
};


export type MutationCreateEventsArgs = {
  input: Array<CreateEventMutationInput>;
};


export type MutationCreateKeywordArgs = {
  input: CreateKeywordMutationInput;
};


export type MutationCreateKeywordSetArgs = {
  input: CreateKeywordSetMutationInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationMutationInput;
};


export type MutationCreatePlaceArgs = {
  input: CreatePlaceMutationInput;
};


export type MutationCreateRegistrationArgs = {
  input: CreateRegistrationMutationInput;
};


export type MutationCreateSeatsReservationArgs = {
  input: CreateSeatsReservationMutationInput;
};


export type MutationDeleteEnrolmentArgs = {
  signup: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteKeywordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteKeywordSetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlaceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRegistrationArgs = {
  id: Scalars['ID'];
};


export type MutationPostFeedbackArgs = {
  input: FeedbackInput;
};


export type MutationPostGuestFeedbackArgs = {
  input: FeedbackInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageMutationInput;
  registration?: InputMaybe<Scalars['String']>;
};


export type MutationSendRegistrationUserAccessInvitationArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateEnrolmentArgs = {
  input: UpdateEnrolmentMutationInput;
  signup: Scalars['String'];
};


export type MutationUpdateEventArgs = {
  input: UpdateEventMutationInput;
};


export type MutationUpdateEventsArgs = {
  input: Array<UpdateEventMutationInput>;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageMutationInput;
};


export type MutationUpdateKeywordArgs = {
  input: UpdateKeywordMutationInput;
};


export type MutationUpdateKeywordSetArgs = {
  input: UpdateKeywordSetMutationInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationMutationInput;
};


export type MutationUpdatePlaceArgs = {
  input: UpdatePlaceMutationInput;
};


export type MutationUpdateRegistrationArgs = {
  input: UpdateRegistrationMutationInput;
};


export type MutationUpdateSeatsReservationArgs = {
  id: Scalars['ID'];
  input: UpdateSeatsReservationMutationInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageMutationInput;
};

export type NoContent = {
  __typename?: 'NoContent';
  noContent?: Maybe<Scalars['Boolean']>;
};

export type Offer = {
  __typename?: 'Offer';
  description?: Maybe<LocalisedObject>;
  infoUrl?: Maybe<LocalisedObject>;
  isFree?: Maybe<Scalars['Boolean']>;
  price?: Maybe<LocalisedObject>;
};

export type OfferInput = {
  description?: InputMaybe<LocalisedObjectInput>;
  infoUrl?: InputMaybe<LocalisedObjectInput>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<LocalisedObjectInput>;
};

export type Organization = {
  __typename?: 'Organization';
  adminUsers?: Maybe<Array<Maybe<User>>>;
  affiliatedOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  dissolutionDate?: Maybe<Scalars['String']>;
  foundingDate?: Maybe<Scalars['String']>;
  hasRegularUsers?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isAffiliated?: Maybe<Scalars['Boolean']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentOrganization?: Maybe<Scalars['String']>;
  regularUsers?: Maybe<Array<Maybe<User>>>;
  replacedBy?: Maybe<Scalars['String']>;
  subOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationClass = {
  __typename?: 'OrganizationClass';
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type OrganizationClassesResponse = {
  __typename?: 'OrganizationClassesResponse';
  data: Array<Maybe<OrganizationClass>>;
  meta: Meta;
};

export type OrganizationsResponse = {
  __typename?: 'OrganizationsResponse';
  data: Array<Maybe<Organization>>;
  meta: Meta;
};

export type Place = {
  __typename?: 'Place';
  addressCountry?: Maybe<Scalars['String']>;
  addressLocality?: Maybe<LocalisedObject>;
  addressRegion?: Maybe<Scalars['String']>;
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  contactType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<LocalisedObject>;
  divisions: Array<Maybe<Division>>;
  email?: Maybe<Scalars['String']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Image>;
  infoUrl?: Maybe<LocalisedObject>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  nEvents?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalisedObject>;
  parent?: Maybe<Scalars['ID']>;
  position?: Maybe<Position>;
  postOfficeBoxNum?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  replacedBy?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<LocalisedObject>;
  telephone?: Maybe<LocalisedObject>;
};

export type PlacesResponse = {
  __typename?: 'PlacesResponse';
  data: Array<Maybe<Place>>;
  meta: Meta;
};

export type Position = {
  __typename?: 'Position';
  coordinates: Array<Maybe<Scalars['Float']>>;
  type?: Maybe<Scalars['String']>;
};

export type PositionInput = {
  coordinates: Array<InputMaybe<Scalars['Float']>>;
  type?: InputMaybe<Scalars['String']>;
};

export enum PresenceStatus {
  NotPresent = 'not_present',
  Present = 'present'
}

export enum PublicationStatus {
  Draft = 'draft',
  Public = 'public'
}

export type Query = {
  __typename?: 'Query';
  dataSource: DataSource;
  dataSources: DataSourcesResponse;
  enrolment: Enrolment;
  enrolments: EnrolmentsResponse;
  event: Event;
  events: EventsResponse;
  image: Image;
  images: ImagesResponse;
  keyword: Keyword;
  keywordSet?: Maybe<KeywordSet>;
  keywordSets: KeywordSetsResponse;
  keywords: KeywordsResponse;
  languages: LanguagesResponse;
  organization: Organization;
  organizationClass: OrganizationClass;
  organizationClasses: OrganizationClassesResponse;
  organizations: OrganizationsResponse;
  place: Place;
  places: PlacesResponse;
  registration: Registration;
  registrations: RegistrationsResponse;
  user: User;
  users: UsersResponse;
};


export type QueryDataSourceArgs = {
  id: Scalars['ID'];
};


export type QueryDataSourcesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryEnrolmentArgs = {
  id: Scalars['ID'];
};


export type QueryEnrolmentsArgs = {
  attendeeStatus?: InputMaybe<AttendeeStatus>;
  registration?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventsArgs = {
  adminUser?: InputMaybe<Scalars['Boolean']>;
  combinedText?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdBy?: InputMaybe<Scalars['String']>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end?: InputMaybe<Scalars['String']>;
  endsAfter?: InputMaybe<Scalars['String']>;
  endsBefore?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  inLanguage?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordNot?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publicationStatus?: InputMaybe<PublicationStatus>;
  publisher?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  registration?: InputMaybe<Scalars['Boolean']>;
  showAll?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  startsAfter?: InputMaybe<Scalars['String']>;
  startsBefore?: InputMaybe<Scalars['String']>;
  superEvent?: InputMaybe<Scalars['ID']>;
  superEventType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryImagesArgs = {
  createdBy?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  mergePages?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publisher?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryKeywordArgs = {
  id: Scalars['ID'];
};


export type QueryKeywordSetArgs = {
  id: Scalars['ID'];
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryKeywordSetsArgs = {
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryKeywordsArgs = {
  dataSource?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  freeText?: InputMaybe<Scalars['String']>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllKeywords?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryLanguagesArgs = {
  serviceLanguage?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationClassArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationClassesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryOrganizationsArgs = {
  child?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlacesArgs = {
  dataSource?: InputMaybe<Scalars['String']>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllPlaces?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryRegistrationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRegistrationsArgs = {
  adminUser?: InputMaybe<Scalars['Boolean']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Registration = {
  __typename?: 'Registration';
  atContext?: Maybe<Scalars['String']>;
  atId: Scalars['String'];
  atType?: Maybe<Scalars['String']>;
  attendeeRegistration?: Maybe<Scalars['Boolean']>;
  audienceMaxAge?: Maybe<Scalars['Int']>;
  audienceMinAge?: Maybe<Scalars['Int']>;
  confirmationMessage?: Maybe<LocalisedObject>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  currentAttendeeCount?: Maybe<Scalars['Int']>;
  currentWaitingListCount?: Maybe<Scalars['Int']>;
  dataSource?: Maybe<Scalars['String']>;
  enrolmentEndTime?: Maybe<Scalars['String']>;
  enrolmentStartTime?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
  instructions?: Maybe<LocalisedObject>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  mandatoryFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  maximumGroupSize?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['String']>;
  registrationUserAccesses?: Maybe<Array<Maybe<RegistrationUserAccess>>>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']>;
  remainingWaitingListCapacity?: Maybe<Scalars['Int']>;
  signups?: Maybe<Array<Maybe<Enrolment>>>;
  waitingListCapacity?: Maybe<Scalars['Int']>;
};

export type RegistrationUserAccess = {
  __typename?: 'RegistrationUserAccess';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
};

export type RegistrationUserAccessInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
};

export type RegistrationsResponse = {
  __typename?: 'RegistrationsResponse';
  data: Array<Maybe<Registration>>;
  meta: Meta;
};

export type SeatsReservation = {
  __typename?: 'SeatsReservation';
  code: Scalars['String'];
  expiration: Scalars['String'];
  id: Scalars['ID'];
  inWaitlist: Scalars['Boolean'];
  registration: Scalars['ID'];
  seats: Scalars['Int'];
  timestamp: Scalars['String'];
};

export type SendMessageMutationInput = {
  body: Scalars['String'];
  signups?: InputMaybe<Array<Scalars['String']>>;
  subject: Scalars['String'];
};

export type SendMessageResponse = {
  __typename?: 'SendMessageResponse';
  htmlMessage: Scalars['String'];
  message: Scalars['String'];
  signups?: Maybe<Array<Scalars['String']>>;
  subject: Scalars['String'];
};

export type SignupInput = {
  city?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  extraInfo?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  membershipNumber?: InputMaybe<Scalars['String']>;
  nativeLanguage?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  presenceStatus?: InputMaybe<PresenceStatus>;
  serviceLanguage?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export enum SuperEventType {
  Recurring = 'recurring',
  Umbrella = 'umbrella'
}

export type UpdateEnrolmentMutationInput = {
  city?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  extraInfo?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  membershipNumber?: InputMaybe<Scalars['String']>;
  nativeLanguage?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  presenceStatus?: InputMaybe<PresenceStatus>;
  registration?: InputMaybe<Scalars['ID']>;
  serviceLanguage?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type UpdateEventMutationInput = {
  audience?: InputMaybe<Array<IdObjectInput>>;
  audienceMaxAge?: InputMaybe<Scalars['Int']>;
  audienceMinAge?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<LocalisedObjectInput>;
  endTime?: InputMaybe<Scalars['String']>;
  enrolmentEndTime?: InputMaybe<Scalars['String']>;
  enrolmentStartTime?: InputMaybe<Scalars['String']>;
  environment?: InputMaybe<Scalars['String']>;
  environmentalCertificate?: InputMaybe<Scalars['String']>;
  eventStatus?: InputMaybe<EventStatus>;
  externalLinks?: InputMaybe<Array<InputMaybe<ExternalLinkInput>>>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<IdObjectInput>>;
  inLanguage?: InputMaybe<Array<IdObjectInput>>;
  infoUrl?: InputMaybe<LocalisedObjectInput>;
  keywords?: InputMaybe<Array<IdObjectInput>>;
  location?: InputMaybe<IdObjectInput>;
  locationExtraInfo?: InputMaybe<LocalisedObjectInput>;
  maximumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  minimumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<LocalisedObjectInput>;
  offers?: InputMaybe<Array<OfferInput>>;
  provider?: InputMaybe<LocalisedObjectInput>;
  publicationStatus?: InputMaybe<PublicationStatus>;
  shortDescription?: InputMaybe<LocalisedObjectInput>;
  startTime?: InputMaybe<Scalars['String']>;
  subEvents?: InputMaybe<Array<IdObjectInput>>;
  superEvent?: InputMaybe<IdObjectInput>;
  superEventType?: InputMaybe<SuperEventType>;
  typeId?: InputMaybe<EventTypeId>;
  userConsent?: InputMaybe<Scalars['Boolean']>;
  userEmail?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
  userOrganization?: InputMaybe<Scalars['String']>;
  userPhoneNumber?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<VideoInput>>>;
};

export type UpdateImageMutationInput = {
  altText?: InputMaybe<LocalisedObjectInput>;
  id: Scalars['ID'];
  license?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photographerName?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
};

export type UpdateKeywordMutationInput = {
  dataSource?: InputMaybe<Scalars['String']>;
  deprecated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<LocalisedObjectInput>;
  publisher?: InputMaybe<Scalars['String']>;
  replacedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateKeywordSetMutationInput = {
  dataSource?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<IdObjectInput>>;
  name?: InputMaybe<LocalisedObjectInput>;
  organization?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationMutationInput = {
  adminUsers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  affiliatedOrganizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  classification?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  dissolutionDate?: InputMaybe<Scalars['String']>;
  foundingDate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  internalType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentOrganization?: InputMaybe<Scalars['String']>;
  regularUsers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  replacedBy?: InputMaybe<Scalars['String']>;
  subOrganizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdatePlaceMutationInput = {
  addressLocality?: InputMaybe<LocalisedObjectInput>;
  addressRegion?: InputMaybe<Scalars['String']>;
  contactType?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<LocalisedObjectInput>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoUrl?: InputMaybe<LocalisedObjectInput>;
  name?: InputMaybe<LocalisedObjectInput>;
  position?: InputMaybe<PositionInput>;
  postOfficeBoxNum?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<LocalisedObjectInput>;
  telephone?: InputMaybe<LocalisedObjectInput>;
};

export type UpdateRegistrationMutationInput = {
  audienceMaxAge?: InputMaybe<Scalars['Int']>;
  audienceMinAge?: InputMaybe<Scalars['Int']>;
  confirmationMessage?: InputMaybe<LocalisedObjectInput>;
  enrolmentEndTime?: InputMaybe<Scalars['String']>;
  enrolmentStartTime?: InputMaybe<Scalars['String']>;
  event: IdObjectInput;
  id: Scalars['ID'];
  instructions?: InputMaybe<LocalisedObjectInput>;
  mandatoryFields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maximumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  maximumGroupSize?: InputMaybe<Scalars['Int']>;
  minimumAttendeeCapacity?: InputMaybe<Scalars['Int']>;
  registrationUserAccesses?: InputMaybe<Array<InputMaybe<RegistrationUserAccessInput>>>;
  waitingListCapacity?: InputMaybe<Scalars['Int']>;
};

export type UpdateSeatsReservationMutationInput = {
  code: Scalars['String'];
  registration: Scalars['ID'];
  seats: Scalars['Int'];
};

export type UploadImageMutationInput = {
  altText?: InputMaybe<LocalisedObjectInput>;
  image?: InputMaybe<Scalars['Any']>;
  license?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photographerName?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  adminOrganizations: Array<Scalars['String']>;
  dateJoined?: Maybe<Scalars['String']>;
  departmentName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isExternal?: Maybe<Scalars['Boolean']>;
  isStaff?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  organizationMemberships: Array<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  data: Array<Maybe<User>>;
  meta: Meta;
};

export type Video = {
  __typename?: 'Video';
  altText?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type VideoInput = {
  altText?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type DataSourceFieldsFragment = { __typename?: 'DataSource', apiKey?: string | null, createPastEvents?: boolean | null, editPastEvents?: boolean | null, id?: string | null, name?: string | null, owner?: string | null, private?: boolean | null, userEditable?: boolean | null };

export type DataSourceQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type DataSourceQuery = { __typename?: 'Query', dataSource: { __typename?: 'DataSource', apiKey?: string | null, createPastEvents?: boolean | null, editPastEvents?: boolean | null, id?: string | null, name?: string | null, owner?: string | null, private?: boolean | null, userEditable?: boolean | null } };

export type DataSourcesQueryVariables = Exact<{
  createPath?: InputMaybe<Scalars['Any']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type DataSourcesQuery = { __typename?: 'Query', dataSources: { __typename?: 'DataSourcesResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'DataSource', apiKey?: string | null, createPastEvents?: boolean | null, editPastEvents?: boolean | null, id?: string | null, name?: string | null, owner?: string | null, private?: boolean | null, userEditable?: boolean | null } | null> } };

export type CreateEnrolmentMutationVariables = Exact<{
  input: CreateEnrolmentMutationInput;
}>;


export type CreateEnrolmentMutation = { __typename?: 'Mutation', createEnrolment: { __typename?: 'CreateEnrolmentResponse', attending?: { __typename?: 'EnrolmentPeopleResponse', count?: number | null, people?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> | null } | null, waitlisted?: { __typename?: 'EnrolmentPeopleResponse', count?: number | null, people?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> | null } | null } };

export type DeleteEnrolmentMutationVariables = Exact<{
  signup: Scalars['String'];
}>;


export type DeleteEnrolmentMutation = { __typename?: 'Mutation', deleteEnrolment?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateEnrolmentMutationVariables = Exact<{
  input: UpdateEnrolmentMutationInput;
  signup: Scalars['String'];
}>;


export type UpdateEnrolmentMutation = { __typename?: 'Mutation', updateEnrolment: { __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } };

export type PatchEnrolmentMutationVariables = Exact<{
  input: UpdateEnrolmentMutationInput;
  signup: Scalars['String'];
}>;


export type PatchEnrolmentMutation = { __typename?: 'Mutation', updateEnrolment: { __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageMutationInput;
  registration: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage?: { __typename?: 'SendMessageResponse', htmlMessage: string, message: string, signups?: Array<string> | null, subject: string } | null };

export type EnrolmentPeopleResponseFieldsFragment = { __typename?: 'EnrolmentPeopleResponse', count?: number | null, people?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> | null };

export type CreateEnrolmentFieldsFragment = { __typename?: 'CreateEnrolmentResponse', attending?: { __typename?: 'EnrolmentPeopleResponse', count?: number | null, people?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> | null } | null, waitlisted?: { __typename?: 'EnrolmentPeopleResponse', count?: number | null, people?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> | null } | null };

export type EnrolmentQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type EnrolmentQuery = { __typename?: 'Query', enrolment: { __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } };

export type EnrolmentFieldsFragment = { __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null };

export type EnrolmentsQueryVariables = Exact<{
  attendeeStatus?: InputMaybe<AttendeeStatus>;
  registration?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type EnrolmentsQuery = { __typename?: 'Query', enrolments: { __typename?: 'EnrolmentsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null }> } };

export type CreateEventMutationVariables = Exact<{
  input: CreateEventMutationInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateEventMutationVariables = Exact<{
  input: UpdateEventMutationInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } };

export type CreateEventsMutationVariables = Exact<{
  input: Array<CreateEventMutationInput> | CreateEventMutationInput;
}>;


export type CreateEventsMutation = { __typename?: 'Mutation', createEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> }> };

export type UpdateEventsMutationVariables = Exact<{
  input: Array<UpdateEventMutationInput> | UpdateEventMutationInput;
}>;


export type UpdateEventsMutation = { __typename?: 'Mutation', updateEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> }> };

export type ExternalLinkFieldsFragment = { __typename?: 'ExternalLink', name?: string | null, link?: string | null };

export type VideoFieldsFragment = { __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null };

export type OfferFieldsFragment = { __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type BaseEventFieldsFragment = { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> };

export type EventFieldsFragment = { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> };

export type EventQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type EventQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } };

export type EventsQueryVariables = Exact<{
  adminUser?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['String']>;
  combinedText?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  end?: InputMaybe<Scalars['String']>;
  endsAfter?: InputMaybe<Scalars['String']>;
  endsBefore?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>> | InputMaybe<EventTypeId>>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  inLanguage?: InputMaybe<Scalars['String']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  keywordAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  keywordNot?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publicationStatus?: InputMaybe<PublicationStatus>;
  publisher?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  registration?: InputMaybe<Scalars['Boolean']>;
  showAll?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  startsAfter?: InputMaybe<Scalars['String']>;
  startsBefore?: InputMaybe<Scalars['String']>;
  superEvent?: InputMaybe<Scalars['ID']>;
  superEventType?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'EventsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null> } };

export type PostFeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;


export type PostFeedbackMutation = { __typename?: 'Mutation', postFeedback?: { __typename?: 'Feedback', id?: string | null, name?: string | null, email?: string | null, subject?: string | null, body?: string | null } | null };

export type PostGuestFeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;


export type PostGuestFeedbackMutation = { __typename?: 'Mutation', postGuestFeedback?: { __typename?: 'Feedback', id?: string | null, name?: string | null, email?: string | null, subject?: string | null, body?: string | null } | null };

export type FeedbackFieldsFragment = { __typename?: 'Feedback', id?: string | null, name?: string | null, email?: string | null, subject?: string | null, body?: string | null };

export type LocalisedFieldsFragment = { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null };

export type IdObjectFieldsFragment = { __typename?: 'IdObject', atId?: string | null };

export type MetaFieldsFragment = { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null };

export type DeleteImageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateImageMutationVariables = Exact<{
  input: UpdateImageMutationInput;
}>;


export type UpdateImageMutation = { __typename?: 'Mutation', updateImage: { __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type UploadImageMutationVariables = Exact<{
  input: UploadImageMutationInput;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage: { __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type ImageFieldsFragment = { __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type ImageQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type ImageQuery = { __typename?: 'Query', image: { __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type ImagesQueryVariables = Exact<{
  createdBy?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  mergePages?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publisher?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type ImagesQuery = { __typename?: 'Query', images: { __typename?: 'ImagesResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> } };

export type CreateKeywordMutationVariables = Exact<{
  input: CreateKeywordMutationInput;
}>;


export type CreateKeywordMutation = { __typename?: 'Mutation', createKeyword: { __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type DeleteKeywordMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteKeywordMutation = { __typename?: 'Mutation', deleteKeyword?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateKeywordMutationVariables = Exact<{
  input: UpdateKeywordMutationInput;
}>;


export type UpdateKeywordMutation = { __typename?: 'Mutation', updateKeyword: { __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type KeywordFieldsFragment = { __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type KeywordQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type KeywordQuery = { __typename?: 'Query', keyword: { __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type KeywordsQueryVariables = Exact<{
  dataSource?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  freeText?: InputMaybe<Scalars['String']>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllKeywords?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type KeywordsQuery = { __typename?: 'Query', keywords: { __typename?: 'KeywordsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> } };

export type CreateKeywordSetMutationVariables = Exact<{
  input: CreateKeywordSetMutationInput;
}>;


export type CreateKeywordSetMutation = { __typename?: 'Mutation', createKeywordSet: { __typename?: 'KeywordSet', id?: string | null, atId: string, dataSource?: string | null, organization?: string | null, usage?: string | null, keywords?: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type DeleteKeywordSetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteKeywordSetMutation = { __typename?: 'Mutation', deleteKeywordSet?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateKeywordSetMutationVariables = Exact<{
  input: UpdateKeywordSetMutationInput;
}>;


export type UpdateKeywordSetMutation = { __typename?: 'Mutation', updateKeywordSet: { __typename?: 'KeywordSet', id?: string | null, atId: string, dataSource?: string | null, organization?: string | null, usage?: string | null, keywords?: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } };

export type KeywordSetFieldsFragment = { __typename?: 'KeywordSet', id?: string | null, atId: string, dataSource?: string | null, organization?: string | null, usage?: string | null, keywords?: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type KeywordSetQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type KeywordSetQuery = { __typename?: 'Query', keywordSet?: { __typename?: 'KeywordSet', id?: string | null, atId: string, dataSource?: string | null, organization?: string | null, usage?: string | null, keywords?: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null };

export type KeywordSetsQueryVariables = Exact<{
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type KeywordSetsQuery = { __typename?: 'Query', keywordSets: { __typename?: 'KeywordSetsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'KeywordSet', id?: string | null, atId: string, dataSource?: string | null, organization?: string | null, usage?: string | null, keywords?: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> } };

export type LanguageFieldsFragment = { __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type LanguagesQueryVariables = Exact<{
  serviceLanguage?: InputMaybe<Scalars['Boolean']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type LanguagesQuery = { __typename?: 'Query', languages: { __typename?: 'LanguagesResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null> } };

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationMutationInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'Organization', affiliatedOrganizations?: Array<string | null> | null, atId: string, classification?: string | null, createdTime?: string | null, dataSource?: string | null, dissolutionDate?: string | null, foundingDate?: string | null, hasRegularUsers?: boolean | null, id?: string | null, isAffiliated?: boolean | null, lastModifiedTime?: string | null, name?: string | null, parentOrganization?: string | null, replacedBy?: string | null, subOrganizations?: Array<string | null> | null, adminUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null, regularUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null } };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteOrganization?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateOrganizationMutationVariables = Exact<{
  input: UpdateOrganizationMutationInput;
}>;


export type UpdateOrganizationMutation = { __typename?: 'Mutation', updateOrganization: { __typename?: 'Organization', affiliatedOrganizations?: Array<string | null> | null, atId: string, classification?: string | null, createdTime?: string | null, dataSource?: string | null, dissolutionDate?: string | null, foundingDate?: string | null, hasRegularUsers?: boolean | null, id?: string | null, isAffiliated?: boolean | null, lastModifiedTime?: string | null, name?: string | null, parentOrganization?: string | null, replacedBy?: string | null, subOrganizations?: Array<string | null> | null, adminUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null, regularUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null } };

export type OrganizationFieldsFragment = { __typename?: 'Organization', affiliatedOrganizations?: Array<string | null> | null, atId: string, classification?: string | null, createdTime?: string | null, dataSource?: string | null, dissolutionDate?: string | null, foundingDate?: string | null, hasRegularUsers?: boolean | null, id?: string | null, isAffiliated?: boolean | null, lastModifiedTime?: string | null, name?: string | null, parentOrganization?: string | null, replacedBy?: string | null, subOrganizations?: Array<string | null> | null, adminUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null, regularUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null };

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', affiliatedOrganizations?: Array<string | null> | null, atId: string, classification?: string | null, createdTime?: string | null, dataSource?: string | null, dissolutionDate?: string | null, foundingDate?: string | null, hasRegularUsers?: boolean | null, id?: string | null, isAffiliated?: boolean | null, lastModifiedTime?: string | null, name?: string | null, parentOrganization?: string | null, replacedBy?: string | null, subOrganizations?: Array<string | null> | null, adminUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null, regularUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null } };

export type OrganizationsQueryVariables = Exact<{
  child?: InputMaybe<Scalars['ID']>;
  createPath?: InputMaybe<Scalars['Any']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations: { __typename?: 'OrganizationsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Organization', affiliatedOrganizations?: Array<string | null> | null, atId: string, classification?: string | null, createdTime?: string | null, dataSource?: string | null, dissolutionDate?: string | null, foundingDate?: string | null, hasRegularUsers?: boolean | null, id?: string | null, isAffiliated?: boolean | null, lastModifiedTime?: string | null, name?: string | null, parentOrganization?: string | null, replacedBy?: string | null, subOrganizations?: Array<string | null> | null, adminUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null, regularUsers?: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> | null } | null> } };

export type OrganizationClassFieldsFragment = { __typename?: 'OrganizationClass', createdTime?: string | null, dataSource?: string | null, id?: string | null, lastModifiedTime?: string | null, name?: string | null };

export type OrganizationClassQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type OrganizationClassQuery = { __typename?: 'Query', organizationClass: { __typename?: 'OrganizationClass', createdTime?: string | null, dataSource?: string | null, id?: string | null, lastModifiedTime?: string | null, name?: string | null } };

export type OrganizationClassesQueryVariables = Exact<{
  createPath?: InputMaybe<Scalars['Any']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type OrganizationClassesQuery = { __typename?: 'Query', organizationClasses: { __typename?: 'OrganizationClassesResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'OrganizationClass', createdTime?: string | null, dataSource?: string | null, id?: string | null, lastModifiedTime?: string | null, name?: string | null } | null> } };

export type CreatePlaceMutationVariables = Exact<{
  input: CreatePlaceMutationInput;
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', createPlace: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } };

export type DeletePlaceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePlaceMutation = { __typename?: 'Mutation', deletePlace?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdatePlaceMutationVariables = Exact<{
  input: UpdatePlaceMutationInput;
}>;


export type UpdatePlaceMutation = { __typename?: 'Mutation', updatePlace: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } };

export type DivisionFieldsFragment = { __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null };

export type PositionFieldsFragment = { __typename?: 'Position', coordinates: Array<number | null> };

export type PlaceFieldsFragment = { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null };

export type PlaceQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type PlaceQuery = { __typename?: 'Query', place: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } };

export type PlacesQueryVariables = Exact<{
  dataSource?: InputMaybe<Scalars['String']>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllPlaces?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type PlacesQuery = { __typename?: 'Query', places: { __typename?: 'PlacesResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null> } };

export type CreateRegistrationMutationVariables = Exact<{
  input: CreateRegistrationMutationInput;
}>;


export type CreateRegistrationMutation = { __typename?: 'Mutation', createRegistration: { __typename?: 'Registration', id?: string | null, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, currentAttendeeCount?: number | null, currentWaitingListCount?: number | null, dataSource?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, lastModifiedAt?: string | null, mandatoryFields?: Array<string | null> | null, maximumAttendeeCapacity?: number | null, maximumGroupSize?: number | null, minimumAttendeeCapacity?: number | null, remainingAttendeeCapacity?: number | null, remainingWaitingListCapacity?: number | null, publisher?: string | null, waitingListCapacity?: number | null, confirmationMessage?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, event?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, instructions?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registrationUserAccesses?: Array<{ __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null } | null> | null, signups?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } | null> | null } };

export type DeleteRegistrationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRegistrationMutation = { __typename?: 'Mutation', deleteRegistration?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type UpdateRegistrationMutationVariables = Exact<{
  input: UpdateRegistrationMutationInput;
}>;


export type UpdateRegistrationMutation = { __typename?: 'Mutation', updateRegistration: { __typename?: 'Registration', id?: string | null, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, currentAttendeeCount?: number | null, currentWaitingListCount?: number | null, dataSource?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, lastModifiedAt?: string | null, mandatoryFields?: Array<string | null> | null, maximumAttendeeCapacity?: number | null, maximumGroupSize?: number | null, minimumAttendeeCapacity?: number | null, remainingAttendeeCapacity?: number | null, remainingWaitingListCapacity?: number | null, publisher?: string | null, waitingListCapacity?: number | null, confirmationMessage?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, event?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, instructions?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registrationUserAccesses?: Array<{ __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null } | null> | null, signups?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } | null> | null } };

export type RegistrationUserAccessFieldsFragment = { __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null };

export type RegistrationFieldsFragment = { __typename?: 'Registration', id?: string | null, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, currentAttendeeCount?: number | null, currentWaitingListCount?: number | null, dataSource?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, lastModifiedAt?: string | null, mandatoryFields?: Array<string | null> | null, maximumAttendeeCapacity?: number | null, maximumGroupSize?: number | null, minimumAttendeeCapacity?: number | null, remainingAttendeeCapacity?: number | null, remainingWaitingListCapacity?: number | null, publisher?: string | null, waitingListCapacity?: number | null, confirmationMessage?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, event?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, instructions?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registrationUserAccesses?: Array<{ __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null } | null> | null, signups?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } | null> | null };

export type RegistrationQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type RegistrationQuery = { __typename?: 'Query', registration: { __typename?: 'Registration', id?: string | null, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, currentAttendeeCount?: number | null, currentWaitingListCount?: number | null, dataSource?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, lastModifiedAt?: string | null, mandatoryFields?: Array<string | null> | null, maximumAttendeeCapacity?: number | null, maximumGroupSize?: number | null, minimumAttendeeCapacity?: number | null, remainingAttendeeCapacity?: number | null, remainingWaitingListCapacity?: number | null, publisher?: string | null, waitingListCapacity?: number | null, confirmationMessage?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, event?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, instructions?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registrationUserAccesses?: Array<{ __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null } | null> | null, signups?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } | null> | null } };

export type SendRegistrationUserAccessInvitationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SendRegistrationUserAccessInvitationMutation = { __typename?: 'Mutation', sendRegistrationUserAccessInvitation?: { __typename?: 'NoContent', noContent?: boolean | null } | null };

export type RegistrationsQueryVariables = Exact<{
  adminUser?: InputMaybe<Scalars['Boolean']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>> | InputMaybe<EventTypeId>>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type RegistrationsQuery = { __typename?: 'Query', registrations: { __typename?: 'RegistrationsResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'Registration', id?: string | null, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, currentAttendeeCount?: number | null, currentWaitingListCount?: number | null, dataSource?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, lastModifiedAt?: string | null, mandatoryFields?: Array<string | null> | null, maximumAttendeeCapacity?: number | null, maximumGroupSize?: number | null, minimumAttendeeCapacity?: number | null, remainingAttendeeCapacity?: number | null, remainingWaitingListCapacity?: number | null, publisher?: string | null, waitingListCapacity?: number | null, confirmationMessage?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, event?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, superEvent?: { __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, subEvents: Array<{ __typename?: 'Event', id: string, atId: string, audienceMaxAge?: number | null, audienceMinAge?: number | null, createdBy?: string | null, deleted?: string | null, endTime?: string | null, enrolmentEndTime?: string | null, enrolmentStartTime?: string | null, environment?: string | null, environmentalCertificate?: string | null, eventStatus?: EventStatus | null, lastModifiedTime?: string | null, maximumAttendeeCapacity?: number | null, minimumAttendeeCapacity?: number | null, publicationStatus?: PublicationStatus | null, publisher?: string | null, startTime?: string | null, superEventType?: SuperEventType | null, typeId?: EventTypeId | null, userConsent?: boolean | null, userEmail?: string | null, userName?: string | null, userOrganization?: string | null, userPhoneNumber?: string | null, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null>, audience: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, externalLinks: Array<{ __typename?: 'ExternalLink', name?: string | null, link?: string | null } | null>, images: Array<{ __typename?: 'Image', id?: string | null, atId: string, lastModifiedTime?: string | null, license?: string | null, name?: string | null, photographerName?: string | null, publisher?: string | null, url?: string | null, altText?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, inLanguage: Array<{ __typename?: 'Language', id?: string | null, atId: string, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, keywords: Array<{ __typename?: 'Keyword', id?: string | null, atId: string, dataSource?: string | null, deprecated?: boolean | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, replacedBy?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, location?: { __typename?: 'Place', id?: string | null, atId: string, addressRegion?: string | null, contactType?: string | null, dataSource?: string | null, email?: string | null, hasUpcomingEvents?: boolean | null, nEvents?: number | null, publisher?: string | null, postalCode?: string | null, postOfficeBoxNum?: string | null, addressLocality?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, divisions: Array<{ __typename?: 'Division', type?: string | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, streetAddress?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, telephone?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, position?: { __typename?: 'Position', coordinates: Array<number | null> } | null } | null, locationExtraInfo?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, name?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, offers: Array<{ __typename?: 'Offer', isFree?: boolean | null, description?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, infoUrl?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, price?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null } | null>, provider?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registration?: { __typename?: 'IdObject', atId?: string | null } | null, shortDescription?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, videos: Array<{ __typename?: 'Video', altText?: string | null, name?: string | null, url?: string | null } | null> } | null, instructions?: { __typename?: 'LocalisedObject', ar?: string | null, en?: string | null, fi?: string | null, ru?: string | null, sv?: string | null, zhHans?: string | null } | null, registrationUserAccesses?: Array<{ __typename?: 'RegistrationUserAccess', email?: string | null, id?: number | null, language?: string | null } | null> | null, signups?: Array<{ __typename?: 'Enrolment', id: string, attendeeStatus?: AttendeeStatus | null, cancellationCode?: string | null, city?: string | null, dateOfBirth?: string | null, email?: string | null, extraInfo?: string | null, firstName?: string | null, lastName?: string | null, membershipNumber?: string | null, nativeLanguage?: string | null, notifications?: string | null, phoneNumber?: string | null, presenceStatus?: PresenceStatus | null, serviceLanguage?: string | null, streetAddress?: string | null, zipcode?: string | null } | null> | null } | null> } };

export type CreateSeatsReservationMutationVariables = Exact<{
  input: CreateSeatsReservationMutationInput;
}>;


export type CreateSeatsReservationMutation = { __typename?: 'Mutation', createSeatsReservation: { __typename?: 'SeatsReservation', id: string, code: string, expiration: string, inWaitlist: boolean, registration: string, seats: number, timestamp: string } };

export type UpdateSeatsReservationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateSeatsReservationMutationInput;
}>;


export type UpdateSeatsReservationMutation = { __typename?: 'Mutation', updateSeatsReservation: { __typename?: 'SeatsReservation', id: string, code: string, expiration: string, inWaitlist: boolean, registration: string, seats: number, timestamp: string } };

export type SeatsReservationFieldsFragment = { __typename?: 'SeatsReservation', id: string, code: string, expiration: string, inWaitlist: boolean, registration: string, seats: number, timestamp: string };

export type UserFieldsFragment = { __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
  createPath?: InputMaybe<Scalars['Any']>;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } };

export type UsersQueryVariables = Exact<{
  createPath?: InputMaybe<Scalars['Any']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersResponse', meta: { __typename?: 'Meta', count: number, next?: string | null, previous?: string | null }, data: Array<{ __typename?: 'User', adminOrganizations: Array<string>, dateJoined?: string | null, departmentName?: string | null, displayName?: string | null, email?: string | null, firstName?: string | null, isExternal?: boolean | null, isStaff?: boolean | null, lastLogin?: string | null, lastName?: string | null, organization?: string | null, organizationMemberships: Array<string>, username?: string | null, uuid?: string | null } | null> } };

export const DataSourceFieldsFragmentDoc = gql`
    fragment dataSourceFields on DataSource {
  apiKey
  createPastEvents
  editPastEvents
  id
  name
  owner
  private
  userEditable
}
    `;
export const EnrolmentFieldsFragmentDoc = gql`
    fragment enrolmentFields on Enrolment {
  id
  attendeeStatus
  cancellationCode
  city
  dateOfBirth
  email
  extraInfo
  firstName
  lastName
  membershipNumber
  nativeLanguage
  notifications
  phoneNumber
  presenceStatus
  serviceLanguage
  streetAddress
  zipcode
}
    `;
export const EnrolmentPeopleResponseFieldsFragmentDoc = gql`
    fragment enrolmentPeopleResponseFields on EnrolmentPeopleResponse {
  count
  people {
    ...enrolmentFields
  }
}
    ${EnrolmentFieldsFragmentDoc}`;
export const CreateEnrolmentFieldsFragmentDoc = gql`
    fragment createEnrolmentFields on CreateEnrolmentResponse {
  attending {
    ...enrolmentPeopleResponseFields
  }
  waitlisted {
    ...enrolmentPeopleResponseFields
  }
}
    ${EnrolmentPeopleResponseFieldsFragmentDoc}`;
export const FeedbackFieldsFragmentDoc = gql`
    fragment feedbackFields on Feedback {
  id
  name
  email
  subject
  body
}
    `;
export const MetaFieldsFragmentDoc = gql`
    fragment metaFields on Meta {
  count
  next
  previous
}
    `;
export const LocalisedFieldsFragmentDoc = gql`
    fragment localisedFields on LocalisedObject {
  ar
  en
  fi
  ru
  sv
  zhHans
}
    `;
export const KeywordFieldsFragmentDoc = gql`
    fragment keywordFields on Keyword {
  id
  atId
  dataSource
  deprecated
  hasUpcomingEvents
  name {
    ...localisedFields
  }
  nEvents
  publisher
  replacedBy
}
    ${LocalisedFieldsFragmentDoc}`;
export const KeywordSetFieldsFragmentDoc = gql`
    fragment keywordSetFields on KeywordSet {
  id
  atId
  dataSource
  keywords {
    ...keywordFields
  }
  name {
    ...localisedFields
  }
  organization
  usage
}
    ${KeywordFieldsFragmentDoc}
${LocalisedFieldsFragmentDoc}`;
export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  adminOrganizations
  dateJoined
  departmentName
  displayName
  email
  firstName
  isExternal
  isStaff
  lastLogin
  lastName
  organization
  organizationMemberships
  username
  uuid
}
    `;
export const OrganizationFieldsFragmentDoc = gql`
    fragment organizationFields on Organization {
  adminUsers {
    ...userFields
  }
  affiliatedOrganizations
  atId
  classification
  createdTime
  dataSource
  dissolutionDate
  foundingDate
  hasRegularUsers
  id
  isAffiliated
  lastModifiedTime
  name
  parentOrganization
  regularUsers {
    ...userFields
  }
  replacedBy
  subOrganizations
}
    ${UserFieldsFragmentDoc}`;
export const OrganizationClassFieldsFragmentDoc = gql`
    fragment organizationClassFields on OrganizationClass {
  createdTime
  dataSource
  id
  lastModifiedTime
  name
}
    `;
export const ExternalLinkFieldsFragmentDoc = gql`
    fragment externalLinkFields on ExternalLink {
  name
  link
}
    `;
export const ImageFieldsFragmentDoc = gql`
    fragment imageFields on Image {
  id
  atId
  altText {
    ...localisedFields
  }
  lastModifiedTime
  license
  name
  photographerName
  publisher
  url
}
    ${LocalisedFieldsFragmentDoc}`;
export const LanguageFieldsFragmentDoc = gql`
    fragment languageFields on Language {
  id
  atId
  name {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const DivisionFieldsFragmentDoc = gql`
    fragment divisionFields on Division {
  type
  name {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const PositionFieldsFragmentDoc = gql`
    fragment positionFields on Position {
  coordinates
}
    `;
export const PlaceFieldsFragmentDoc = gql`
    fragment placeFields on Place {
  id
  atId
  addressLocality {
    ...localisedFields
  }
  addressRegion
  contactType
  dataSource
  description {
    ...localisedFields
  }
  divisions {
    ...divisionFields
  }
  email
  hasUpcomingEvents
  infoUrl {
    ...localisedFields
  }
  name {
    ...localisedFields
  }
  nEvents
  publisher
  postalCode
  postOfficeBoxNum
  streetAddress {
    ...localisedFields
  }
  telephone {
    ...localisedFields
  }
  position {
    ...positionFields
  }
}
    ${LocalisedFieldsFragmentDoc}
${DivisionFieldsFragmentDoc}
${PositionFieldsFragmentDoc}`;
export const OfferFieldsFragmentDoc = gql`
    fragment offerFields on Offer {
  description {
    ...localisedFields
  }
  infoUrl {
    ...localisedFields
  }
  isFree
  price {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const IdObjectFieldsFragmentDoc = gql`
    fragment idObjectFields on IdObject {
  atId
}
    `;
export const VideoFieldsFragmentDoc = gql`
    fragment videoFields on Video {
  altText
  name
  url
}
    `;
export const BaseEventFieldsFragmentDoc = gql`
    fragment baseEventFields on Event {
  id
  atId
  audience {
    ...keywordFields
  }
  audienceMaxAge
  audienceMinAge
  createdBy
  deleted
  description {
    ...localisedFields
  }
  endTime
  enrolmentEndTime
  enrolmentStartTime
  environment
  environmentalCertificate
  externalLinks {
    ...externalLinkFields
  }
  eventStatus
  images {
    ...imageFields
  }
  infoUrl {
    ...localisedFields
  }
  inLanguage {
    ...languageFields
  }
  keywords {
    ...keywordFields
  }
  lastModifiedTime
  location {
    ...placeFields
  }
  locationExtraInfo {
    ...localisedFields
  }
  maximumAttendeeCapacity
  minimumAttendeeCapacity
  name {
    ...localisedFields
  }
  offers {
    ...offerFields
  }
  publicationStatus
  provider {
    ...localisedFields
  }
  publisher
  registration {
    ...idObjectFields
  }
  shortDescription {
    ...localisedFields
  }
  startTime
  superEventType
  typeId
  userConsent
  userEmail
  userName
  userOrganization
  userPhoneNumber
  videos {
    ...videoFields
  }
}
    ${KeywordFieldsFragmentDoc}
${LocalisedFieldsFragmentDoc}
${ExternalLinkFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${LanguageFieldsFragmentDoc}
${PlaceFieldsFragmentDoc}
${OfferFieldsFragmentDoc}
${IdObjectFieldsFragmentDoc}
${VideoFieldsFragmentDoc}`;
export const EventFieldsFragmentDoc = gql`
    fragment eventFields on Event {
  ...baseEventFields
  superEvent {
    ...baseEventFields
  }
  subEvents {
    ...baseEventFields
    subEvents {
      ...baseEventFields
    }
  }
}
    ${BaseEventFieldsFragmentDoc}`;
export const RegistrationUserAccessFieldsFragmentDoc = gql`
    fragment registrationUserAccessFields on RegistrationUserAccess {
  email
  id
  language
}
    `;
export const RegistrationFieldsFragmentDoc = gql`
    fragment registrationFields on Registration {
  id
  atId
  audienceMaxAge
  audienceMinAge
  confirmationMessage {
    ...localisedFields
  }
  createdBy
  currentAttendeeCount
  currentWaitingListCount
  dataSource
  enrolmentEndTime
  enrolmentStartTime
  event {
    ...eventFields
  }
  instructions {
    ...localisedFields
  }
  lastModifiedAt
  mandatoryFields
  maximumAttendeeCapacity
  maximumGroupSize
  minimumAttendeeCapacity
  remainingAttendeeCapacity
  remainingWaitingListCapacity
  publisher
  registrationUserAccesses {
    ...registrationUserAccessFields
  }
  signups {
    ...enrolmentFields
  }
  waitingListCapacity
}
    ${LocalisedFieldsFragmentDoc}
${EventFieldsFragmentDoc}
${RegistrationUserAccessFieldsFragmentDoc}
${EnrolmentFieldsFragmentDoc}`;
export const SeatsReservationFieldsFragmentDoc = gql`
    fragment seatsReservationFields on SeatsReservation {
  id
  code
  expiration
  inWaitlist
  registration
  seats
  timestamp
}
    `;
export const DataSourceDocument = gql`
    query DataSource($id: ID!, $createPath: Any) {
  dataSource(id: $id) @rest(type: "DataSource", pathBuilder: $createPath) {
    ...dataSourceFields
  }
}
    ${DataSourceFieldsFragmentDoc}`;

/**
 * __useDataSourceQuery__
 *
 * To run a query within a React component, call `useDataSourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataSourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataSourceQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useDataSourceQuery(baseOptions: Apollo.QueryHookOptions<DataSourceQuery, DataSourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataSourceQuery, DataSourceQueryVariables>(DataSourceDocument, options);
      }
export function useDataSourceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataSourceQuery, DataSourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataSourceQuery, DataSourceQueryVariables>(DataSourceDocument, options);
        }
export type DataSourceQueryHookResult = ReturnType<typeof useDataSourceQuery>;
export type DataSourceLazyQueryHookResult = ReturnType<typeof useDataSourceLazyQuery>;
export type DataSourceQueryResult = Apollo.QueryResult<DataSourceQuery, DataSourceQueryVariables>;
export const DataSourcesDocument = gql`
    query DataSources($createPath: Any, $page: Int, $pageSize: Int) {
  dataSources(page: $page, pageSize: $pageSize) @rest(type: "DataSourcesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...dataSourceFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${DataSourceFieldsFragmentDoc}`;

/**
 * __useDataSourcesQuery__
 *
 * To run a query within a React component, call `useDataSourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataSourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataSourcesQuery({
 *   variables: {
 *      createPath: // value for 'createPath'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useDataSourcesQuery(baseOptions?: Apollo.QueryHookOptions<DataSourcesQuery, DataSourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataSourcesQuery, DataSourcesQueryVariables>(DataSourcesDocument, options);
      }
export function useDataSourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataSourcesQuery, DataSourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataSourcesQuery, DataSourcesQueryVariables>(DataSourcesDocument, options);
        }
export type DataSourcesQueryHookResult = ReturnType<typeof useDataSourcesQuery>;
export type DataSourcesLazyQueryHookResult = ReturnType<typeof useDataSourcesLazyQuery>;
export type DataSourcesQueryResult = Apollo.QueryResult<DataSourcesQuery, DataSourcesQueryVariables>;
export const CreateEnrolmentDocument = gql`
    mutation CreateEnrolment($input: CreateEnrolmentMutationInput!) {
  createEnrolment(input: $input) @rest(type: "CreateEnrolmentResponse", path: "/signup/", method: "POST", bodyKey: "input") {
    ...createEnrolmentFields
  }
}
    ${CreateEnrolmentFieldsFragmentDoc}`;
export type CreateEnrolmentMutationFn = Apollo.MutationFunction<CreateEnrolmentMutation, CreateEnrolmentMutationVariables>;

/**
 * __useCreateEnrolmentMutation__
 *
 * To run a mutation, you first call `useCreateEnrolmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEnrolmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEnrolmentMutation, { data, loading, error }] = useCreateEnrolmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEnrolmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateEnrolmentMutation, CreateEnrolmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEnrolmentMutation, CreateEnrolmentMutationVariables>(CreateEnrolmentDocument, options);
      }
export type CreateEnrolmentMutationHookResult = ReturnType<typeof useCreateEnrolmentMutation>;
export type CreateEnrolmentMutationResult = Apollo.MutationResult<CreateEnrolmentMutation>;
export type CreateEnrolmentMutationOptions = Apollo.BaseMutationOptions<CreateEnrolmentMutation, CreateEnrolmentMutationVariables>;
export const DeleteEnrolmentDocument = gql`
    mutation DeleteEnrolment($signup: String!) {
  deleteEnrolment(signup: $signup) @rest(type: "NoContent", path: "/signup/{args.signup}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteEnrolmentMutationFn = Apollo.MutationFunction<DeleteEnrolmentMutation, DeleteEnrolmentMutationVariables>;

/**
 * __useDeleteEnrolmentMutation__
 *
 * To run a mutation, you first call `useDeleteEnrolmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEnrolmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEnrolmentMutation, { data, loading, error }] = useDeleteEnrolmentMutation({
 *   variables: {
 *      signup: // value for 'signup'
 *   },
 * });
 */
export function useDeleteEnrolmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEnrolmentMutation, DeleteEnrolmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEnrolmentMutation, DeleteEnrolmentMutationVariables>(DeleteEnrolmentDocument, options);
      }
export type DeleteEnrolmentMutationHookResult = ReturnType<typeof useDeleteEnrolmentMutation>;
export type DeleteEnrolmentMutationResult = Apollo.MutationResult<DeleteEnrolmentMutation>;
export type DeleteEnrolmentMutationOptions = Apollo.BaseMutationOptions<DeleteEnrolmentMutation, DeleteEnrolmentMutationVariables>;
export const UpdateEnrolmentDocument = gql`
    mutation UpdateEnrolment($input: UpdateEnrolmentMutationInput!, $signup: String!) {
  updateEnrolment(input: $input, signup: $signup) @rest(type: "Enrolment", path: "/signup/{args.signup}/", method: "PUT", bodyKey: "input") {
    ...enrolmentFields
  }
}
    ${EnrolmentFieldsFragmentDoc}`;
export type UpdateEnrolmentMutationFn = Apollo.MutationFunction<UpdateEnrolmentMutation, UpdateEnrolmentMutationVariables>;

/**
 * __useUpdateEnrolmentMutation__
 *
 * To run a mutation, you first call `useUpdateEnrolmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEnrolmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEnrolmentMutation, { data, loading, error }] = useUpdateEnrolmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      signup: // value for 'signup'
 *   },
 * });
 */
export function useUpdateEnrolmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEnrolmentMutation, UpdateEnrolmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEnrolmentMutation, UpdateEnrolmentMutationVariables>(UpdateEnrolmentDocument, options);
      }
export type UpdateEnrolmentMutationHookResult = ReturnType<typeof useUpdateEnrolmentMutation>;
export type UpdateEnrolmentMutationResult = Apollo.MutationResult<UpdateEnrolmentMutation>;
export type UpdateEnrolmentMutationOptions = Apollo.BaseMutationOptions<UpdateEnrolmentMutation, UpdateEnrolmentMutationVariables>;
export const PatchEnrolmentDocument = gql`
    mutation PatchEnrolment($input: UpdateEnrolmentMutationInput!, $signup: String!) {
  updateEnrolment(input: $input, signup: $signup) @rest(type: "Enrolment", path: "/signup/{args.signup}/", method: "PATCH", bodyKey: "input") {
    ...enrolmentFields
  }
}
    ${EnrolmentFieldsFragmentDoc}`;
export type PatchEnrolmentMutationFn = Apollo.MutationFunction<PatchEnrolmentMutation, PatchEnrolmentMutationVariables>;

/**
 * __usePatchEnrolmentMutation__
 *
 * To run a mutation, you first call `usePatchEnrolmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchEnrolmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchEnrolmentMutation, { data, loading, error }] = usePatchEnrolmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      signup: // value for 'signup'
 *   },
 * });
 */
export function usePatchEnrolmentMutation(baseOptions?: Apollo.MutationHookOptions<PatchEnrolmentMutation, PatchEnrolmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PatchEnrolmentMutation, PatchEnrolmentMutationVariables>(PatchEnrolmentDocument, options);
      }
export type PatchEnrolmentMutationHookResult = ReturnType<typeof usePatchEnrolmentMutation>;
export type PatchEnrolmentMutationResult = Apollo.MutationResult<PatchEnrolmentMutation>;
export type PatchEnrolmentMutationOptions = Apollo.BaseMutationOptions<PatchEnrolmentMutation, PatchEnrolmentMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($input: SendMessageMutationInput!, $registration: String!) {
  sendMessage(input: $input, registration: $registration) @rest(type: "SendMessageResponse", path: "/registration/{args.registration}/send_message/", method: "POST", bodyKey: "input") {
    htmlMessage
    message
    signups
    subject
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      registration: // value for 'registration'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const EnrolmentDocument = gql`
    query Enrolment($id: ID!, $createPath: Any) {
  enrolment(id: $id) @rest(type: "Enrolment", pathBuilder: $createPath) {
    ...enrolmentFields
  }
}
    ${EnrolmentFieldsFragmentDoc}`;

/**
 * __useEnrolmentQuery__
 *
 * To run a query within a React component, call `useEnrolmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnrolmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnrolmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEnrolmentQuery(baseOptions: Apollo.QueryHookOptions<EnrolmentQuery, EnrolmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnrolmentQuery, EnrolmentQueryVariables>(EnrolmentDocument, options);
      }
export function useEnrolmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnrolmentQuery, EnrolmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnrolmentQuery, EnrolmentQueryVariables>(EnrolmentDocument, options);
        }
export type EnrolmentQueryHookResult = ReturnType<typeof useEnrolmentQuery>;
export type EnrolmentLazyQueryHookResult = ReturnType<typeof useEnrolmentLazyQuery>;
export type EnrolmentQueryResult = Apollo.QueryResult<EnrolmentQuery, EnrolmentQueryVariables>;
export const EnrolmentsDocument = gql`
    query Enrolments($attendeeStatus: AttendeeStatus, $registration: [ID], $text: String, $createPath: Any) {
  enrolments(
    attendeeStatus: $attendeeStatus
    registration: $registration
    text: $text
  ) @rest(type: "EnrolmentsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...enrolmentFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${EnrolmentFieldsFragmentDoc}`;

/**
 * __useEnrolmentsQuery__
 *
 * To run a query within a React component, call `useEnrolmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnrolmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnrolmentsQuery({
 *   variables: {
 *      attendeeStatus: // value for 'attendeeStatus'
 *      registration: // value for 'registration'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEnrolmentsQuery(baseOptions?: Apollo.QueryHookOptions<EnrolmentsQuery, EnrolmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnrolmentsQuery, EnrolmentsQueryVariables>(EnrolmentsDocument, options);
      }
export function useEnrolmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnrolmentsQuery, EnrolmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnrolmentsQuery, EnrolmentsQueryVariables>(EnrolmentsDocument, options);
        }
export type EnrolmentsQueryHookResult = ReturnType<typeof useEnrolmentsQuery>;
export type EnrolmentsLazyQueryHookResult = ReturnType<typeof useEnrolmentsLazyQuery>;
export type EnrolmentsQueryResult = Apollo.QueryResult<EnrolmentsQuery, EnrolmentsQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($input: CreateEventMutationInput!) {
  createEvent(input: $input) @rest(type: "Event", path: "/event/", method: "POST", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id) @rest(type: "NoContent", path: "/event/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($input: UpdateEventMutationInput!) {
  updateEvent(input: $input) @rest(type: "Event", path: "/event/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const CreateEventsDocument = gql`
    mutation CreateEvents($input: [CreateEventMutationInput!]!) {
  createEvents(input: $input) @rest(type: "Event", path: "/event/", method: "POST", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type CreateEventsMutationFn = Apollo.MutationFunction<CreateEventsMutation, CreateEventsMutationVariables>;

/**
 * __useCreateEventsMutation__
 *
 * To run a mutation, you first call `useCreateEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventsMutation, { data, loading, error }] = useCreateEventsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventsMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventsMutation, CreateEventsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventsMutation, CreateEventsMutationVariables>(CreateEventsDocument, options);
      }
export type CreateEventsMutationHookResult = ReturnType<typeof useCreateEventsMutation>;
export type CreateEventsMutationResult = Apollo.MutationResult<CreateEventsMutation>;
export type CreateEventsMutationOptions = Apollo.BaseMutationOptions<CreateEventsMutation, CreateEventsMutationVariables>;
export const UpdateEventsDocument = gql`
    mutation UpdateEvents($input: [UpdateEventMutationInput!]!) {
  updateEvents(input: $input) @rest(type: "Event", path: "/event/", method: "PUT", bodyKey: "input") {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type UpdateEventsMutationFn = Apollo.MutationFunction<UpdateEventsMutation, UpdateEventsMutationVariables>;

/**
 * __useUpdateEventsMutation__
 *
 * To run a mutation, you first call `useUpdateEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventsMutation, { data, loading, error }] = useUpdateEventsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventsMutation, UpdateEventsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventsMutation, UpdateEventsMutationVariables>(UpdateEventsDocument, options);
      }
export type UpdateEventsMutationHookResult = ReturnType<typeof useUpdateEventsMutation>;
export type UpdateEventsMutationResult = Apollo.MutationResult<UpdateEventsMutation>;
export type UpdateEventsMutationOptions = Apollo.BaseMutationOptions<UpdateEventsMutation, UpdateEventsMutationVariables>;
export const EventDocument = gql`
    query Event($id: ID!, $include: [String], $createPath: Any) {
  event(id: $id, include: $include) @rest(type: "Event", pathBuilder: $createPath) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const EventsDocument = gql`
    query Events($adminUser: Boolean, $createdBy: String, $combinedText: [String], $division: [String], $end: String, $endsAfter: String, $endsBefore: String, $eventType: [EventTypeId], $include: [String], $inLanguage: String, $isFree: Boolean, $keyword: [String], $keywordAnd: [String], $keywordNot: [String], $language: String, $location: [String], $page: Int, $pageSize: Int, $publicationStatus: PublicationStatus, $publisher: [String], $registration: Boolean, $showAll: Boolean, $sort: String, $start: String, $startsAfter: String, $startsBefore: String, $superEvent: ID, $superEventType: [String], $text: String, $translation: String, $createPath: Any) {
  events(
    adminUser: $adminUser
    createdBy: $createdBy
    combinedText: $combinedText
    division: $division
    end: $end
    endsAfter: $endsAfter
    endsBefore: $endsBefore
    eventType: $eventType
    include: $include
    inLanguage: $inLanguage
    isFree: $isFree
    keyword: $keyword
    keywordAnd: $keywordAnd
    keywordNot: $keywordNot
    language: $language
    location: $location
    page: $page
    pageSize: $pageSize
    publicationStatus: $publicationStatus
    publisher: $publisher
    registration: $registration
    showAll: $showAll
    sort: $sort
    start: $start
    startsAfter: $startsAfter
    startsBefore: $startsBefore
    superEvent: $superEvent
    superEventType: $superEventType
    text: $text
    translation: $translation
  ) @rest(type: "EventsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...eventFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${EventFieldsFragmentDoc}`;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      adminUser: // value for 'adminUser'
 *      createdBy: // value for 'createdBy'
 *      combinedText: // value for 'combinedText'
 *      division: // value for 'division'
 *      end: // value for 'end'
 *      endsAfter: // value for 'endsAfter'
 *      endsBefore: // value for 'endsBefore'
 *      eventType: // value for 'eventType'
 *      include: // value for 'include'
 *      inLanguage: // value for 'inLanguage'
 *      isFree: // value for 'isFree'
 *      keyword: // value for 'keyword'
 *      keywordAnd: // value for 'keywordAnd'
 *      keywordNot: // value for 'keywordNot'
 *      language: // value for 'language'
 *      location: // value for 'location'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publicationStatus: // value for 'publicationStatus'
 *      publisher: // value for 'publisher'
 *      registration: // value for 'registration'
 *      showAll: // value for 'showAll'
 *      sort: // value for 'sort'
 *      start: // value for 'start'
 *      startsAfter: // value for 'startsAfter'
 *      startsBefore: // value for 'startsBefore'
 *      superEvent: // value for 'superEvent'
 *      superEventType: // value for 'superEventType'
 *      text: // value for 'text'
 *      translation: // value for 'translation'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const PostFeedbackDocument = gql`
    mutation PostFeedback($input: FeedbackInput!) {
  postFeedback(input: $input) @rest(type: "Feedback", path: "/feedback/", method: "POST", bodyKey: "input") {
    ...feedbackFields
  }
}
    ${FeedbackFieldsFragmentDoc}`;
export type PostFeedbackMutationFn = Apollo.MutationFunction<PostFeedbackMutation, PostFeedbackMutationVariables>;

/**
 * __usePostFeedbackMutation__
 *
 * To run a mutation, you first call `usePostFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postFeedbackMutation, { data, loading, error }] = usePostFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<PostFeedbackMutation, PostFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostFeedbackMutation, PostFeedbackMutationVariables>(PostFeedbackDocument, options);
      }
export type PostFeedbackMutationHookResult = ReturnType<typeof usePostFeedbackMutation>;
export type PostFeedbackMutationResult = Apollo.MutationResult<PostFeedbackMutation>;
export type PostFeedbackMutationOptions = Apollo.BaseMutationOptions<PostFeedbackMutation, PostFeedbackMutationVariables>;
export const PostGuestFeedbackDocument = gql`
    mutation PostGuestFeedback($input: FeedbackInput!) {
  postGuestFeedback(input: $input) @rest(type: "Feedback", path: "/guest-feedback/", method: "POST", bodyKey: "input") {
    ...feedbackFields
  }
}
    ${FeedbackFieldsFragmentDoc}`;
export type PostGuestFeedbackMutationFn = Apollo.MutationFunction<PostGuestFeedbackMutation, PostGuestFeedbackMutationVariables>;

/**
 * __usePostGuestFeedbackMutation__
 *
 * To run a mutation, you first call `usePostGuestFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostGuestFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postGuestFeedbackMutation, { data, loading, error }] = usePostGuestFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostGuestFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<PostGuestFeedbackMutation, PostGuestFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostGuestFeedbackMutation, PostGuestFeedbackMutationVariables>(PostGuestFeedbackDocument, options);
      }
export type PostGuestFeedbackMutationHookResult = ReturnType<typeof usePostGuestFeedbackMutation>;
export type PostGuestFeedbackMutationResult = Apollo.MutationResult<PostGuestFeedbackMutation>;
export type PostGuestFeedbackMutationOptions = Apollo.BaseMutationOptions<PostGuestFeedbackMutation, PostGuestFeedbackMutationVariables>;
export const DeleteImageDocument = gql`
    mutation DeleteImage($id: ID!) {
  deleteImage(id: $id) @rest(type: "NoContent", path: "/image/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const UpdateImageDocument = gql`
    mutation UpdateImage($input: UpdateImageMutationInput!) {
  updateImage(input: $input) @rest(type: "Image", path: "/image/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const UploadImageDocument = gql`
    mutation UploadImage($input: UploadImageMutationInput!) {
  uploadImage(input: $input) @rest(type: "Image", path: "/image/", method: "POST", bodySerializer: "uploadImageSerializer") {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const ImageDocument = gql`
    query Image($id: ID!, $createPath: Any) {
  image(id: $id) @rest(type: "Image", pathBuilder: $createPath) {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;

/**
 * __useImageQuery__
 *
 * To run a query within a React component, call `useImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useImageQuery(baseOptions: Apollo.QueryHookOptions<ImageQuery, ImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImageQuery, ImageQueryVariables>(ImageDocument, options);
      }
export function useImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImageQuery, ImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImageQuery, ImageQueryVariables>(ImageDocument, options);
        }
export type ImageQueryHookResult = ReturnType<typeof useImageQuery>;
export type ImageLazyQueryHookResult = ReturnType<typeof useImageLazyQuery>;
export type ImageQueryResult = Apollo.QueryResult<ImageQuery, ImageQueryVariables>;
export const ImagesDocument = gql`
    query Images($createdBy: String, $dataSource: String, $mergePages: Boolean, $page: Int, $pageSize: Int, $publisher: ID, $sort: String, $text: String, $createPath: Any) {
  images(
    createdBy: $createdBy
    dataSource: $dataSource
    mergePages: $mergePages
    page: $page
    pageSize: $pageSize
    publisher: $publisher
    sort: $sort
    text: $text
  ) @rest(type: "ImagesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...imageFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *      createdBy: // value for 'createdBy'
 *      dataSource: // value for 'dataSource'
 *      mergePages: // value for 'mergePages'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publisher: // value for 'publisher'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: Apollo.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
      }
export function useImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const CreateKeywordDocument = gql`
    mutation CreateKeyword($input: CreateKeywordMutationInput!) {
  createKeyword(input: $input) @rest(type: "Keyword", path: "/keyword/", method: "POST", bodyKey: "input") {
    ...keywordFields
  }
}
    ${KeywordFieldsFragmentDoc}`;
export type CreateKeywordMutationFn = Apollo.MutationFunction<CreateKeywordMutation, CreateKeywordMutationVariables>;

/**
 * __useCreateKeywordMutation__
 *
 * To run a mutation, you first call `useCreateKeywordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKeywordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKeywordMutation, { data, loading, error }] = useCreateKeywordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateKeywordMutation(baseOptions?: Apollo.MutationHookOptions<CreateKeywordMutation, CreateKeywordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateKeywordMutation, CreateKeywordMutationVariables>(CreateKeywordDocument, options);
      }
export type CreateKeywordMutationHookResult = ReturnType<typeof useCreateKeywordMutation>;
export type CreateKeywordMutationResult = Apollo.MutationResult<CreateKeywordMutation>;
export type CreateKeywordMutationOptions = Apollo.BaseMutationOptions<CreateKeywordMutation, CreateKeywordMutationVariables>;
export const DeleteKeywordDocument = gql`
    mutation DeleteKeyword($id: ID!) {
  deleteKeyword(id: $id) @rest(type: "NoContent", path: "/keyword/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteKeywordMutationFn = Apollo.MutationFunction<DeleteKeywordMutation, DeleteKeywordMutationVariables>;

/**
 * __useDeleteKeywordMutation__
 *
 * To run a mutation, you first call `useDeleteKeywordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKeywordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKeywordMutation, { data, loading, error }] = useDeleteKeywordMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteKeywordMutation(baseOptions?: Apollo.MutationHookOptions<DeleteKeywordMutation, DeleteKeywordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteKeywordMutation, DeleteKeywordMutationVariables>(DeleteKeywordDocument, options);
      }
export type DeleteKeywordMutationHookResult = ReturnType<typeof useDeleteKeywordMutation>;
export type DeleteKeywordMutationResult = Apollo.MutationResult<DeleteKeywordMutation>;
export type DeleteKeywordMutationOptions = Apollo.BaseMutationOptions<DeleteKeywordMutation, DeleteKeywordMutationVariables>;
export const UpdateKeywordDocument = gql`
    mutation UpdateKeyword($input: UpdateKeywordMutationInput!) {
  updateKeyword(input: $input) @rest(type: "Keyword", path: "/keyword/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...keywordFields
  }
}
    ${KeywordFieldsFragmentDoc}`;
export type UpdateKeywordMutationFn = Apollo.MutationFunction<UpdateKeywordMutation, UpdateKeywordMutationVariables>;

/**
 * __useUpdateKeywordMutation__
 *
 * To run a mutation, you first call `useUpdateKeywordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeywordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeywordMutation, { data, loading, error }] = useUpdateKeywordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKeywordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKeywordMutation, UpdateKeywordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKeywordMutation, UpdateKeywordMutationVariables>(UpdateKeywordDocument, options);
      }
export type UpdateKeywordMutationHookResult = ReturnType<typeof useUpdateKeywordMutation>;
export type UpdateKeywordMutationResult = Apollo.MutationResult<UpdateKeywordMutation>;
export type UpdateKeywordMutationOptions = Apollo.BaseMutationOptions<UpdateKeywordMutation, UpdateKeywordMutationVariables>;
export const KeywordDocument = gql`
    query Keyword($id: ID!, $createPath: Any) {
  keyword(id: $id) @rest(type: "Keyword", pathBuilder: $createPath) {
    ...keywordFields
  }
}
    ${KeywordFieldsFragmentDoc}`;

/**
 * __useKeywordQuery__
 *
 * To run a query within a React component, call `useKeywordQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordQuery(baseOptions: Apollo.QueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, options);
      }
export function useKeywordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, options);
        }
export type KeywordQueryHookResult = ReturnType<typeof useKeywordQuery>;
export type KeywordLazyQueryHookResult = ReturnType<typeof useKeywordLazyQuery>;
export type KeywordQueryResult = Apollo.QueryResult<KeywordQuery, KeywordQueryVariables>;
export const KeywordsDocument = gql`
    query Keywords($dataSource: [String], $freeText: String, $hasUpcomingEvents: Boolean, $page: Int, $pageSize: Int, $showAllKeywords: Boolean, $sort: String, $text: String, $createPath: Any) {
  keywords(
    dataSource: $dataSource
    freeText: $freeText
    hasUpcomingEvents: $hasUpcomingEvents
    page: $page
    pageSize: $pageSize
    showAllKeywords: $showAllKeywords
    sort: $sort
    text: $text
  ) @rest(type: "KeywordsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...keywordFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${KeywordFieldsFragmentDoc}`;

/**
 * __useKeywordsQuery__
 *
 * To run a query within a React component, call `useKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordsQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      freeText: // value for 'freeText'
 *      hasUpcomingEvents: // value for 'hasUpcomingEvents'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllKeywords: // value for 'showAllKeywords'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordsQuery(baseOptions?: Apollo.QueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, options);
      }
export function useKeywordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, options);
        }
export type KeywordsQueryHookResult = ReturnType<typeof useKeywordsQuery>;
export type KeywordsLazyQueryHookResult = ReturnType<typeof useKeywordsLazyQuery>;
export type KeywordsQueryResult = Apollo.QueryResult<KeywordsQuery, KeywordsQueryVariables>;
export const CreateKeywordSetDocument = gql`
    mutation CreateKeywordSet($input: CreateKeywordSetMutationInput!) {
  createKeywordSet(input: $input) @rest(type: "KeywordSet", path: "/keyword_set/", method: "POST", bodyKey: "input") {
    ...keywordSetFields
  }
}
    ${KeywordSetFieldsFragmentDoc}`;
export type CreateKeywordSetMutationFn = Apollo.MutationFunction<CreateKeywordSetMutation, CreateKeywordSetMutationVariables>;

/**
 * __useCreateKeywordSetMutation__
 *
 * To run a mutation, you first call `useCreateKeywordSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKeywordSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKeywordSetMutation, { data, loading, error }] = useCreateKeywordSetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateKeywordSetMutation(baseOptions?: Apollo.MutationHookOptions<CreateKeywordSetMutation, CreateKeywordSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateKeywordSetMutation, CreateKeywordSetMutationVariables>(CreateKeywordSetDocument, options);
      }
export type CreateKeywordSetMutationHookResult = ReturnType<typeof useCreateKeywordSetMutation>;
export type CreateKeywordSetMutationResult = Apollo.MutationResult<CreateKeywordSetMutation>;
export type CreateKeywordSetMutationOptions = Apollo.BaseMutationOptions<CreateKeywordSetMutation, CreateKeywordSetMutationVariables>;
export const DeleteKeywordSetDocument = gql`
    mutation DeleteKeywordSet($id: ID!) {
  deleteKeywordSet(id: $id) @rest(type: "NoContent", path: "/keyword_set/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteKeywordSetMutationFn = Apollo.MutationFunction<DeleteKeywordSetMutation, DeleteKeywordSetMutationVariables>;

/**
 * __useDeleteKeywordSetMutation__
 *
 * To run a mutation, you first call `useDeleteKeywordSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKeywordSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKeywordSetMutation, { data, loading, error }] = useDeleteKeywordSetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteKeywordSetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteKeywordSetMutation, DeleteKeywordSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteKeywordSetMutation, DeleteKeywordSetMutationVariables>(DeleteKeywordSetDocument, options);
      }
export type DeleteKeywordSetMutationHookResult = ReturnType<typeof useDeleteKeywordSetMutation>;
export type DeleteKeywordSetMutationResult = Apollo.MutationResult<DeleteKeywordSetMutation>;
export type DeleteKeywordSetMutationOptions = Apollo.BaseMutationOptions<DeleteKeywordSetMutation, DeleteKeywordSetMutationVariables>;
export const UpdateKeywordSetDocument = gql`
    mutation UpdateKeywordSet($input: UpdateKeywordSetMutationInput!) {
  updateKeywordSet(input: $input) @rest(type: "KeywordSet", path: "/keyword_set/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...keywordSetFields
  }
}
    ${KeywordSetFieldsFragmentDoc}`;
export type UpdateKeywordSetMutationFn = Apollo.MutationFunction<UpdateKeywordSetMutation, UpdateKeywordSetMutationVariables>;

/**
 * __useUpdateKeywordSetMutation__
 *
 * To run a mutation, you first call `useUpdateKeywordSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeywordSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeywordSetMutation, { data, loading, error }] = useUpdateKeywordSetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKeywordSetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKeywordSetMutation, UpdateKeywordSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKeywordSetMutation, UpdateKeywordSetMutationVariables>(UpdateKeywordSetDocument, options);
      }
export type UpdateKeywordSetMutationHookResult = ReturnType<typeof useUpdateKeywordSetMutation>;
export type UpdateKeywordSetMutationResult = Apollo.MutationResult<UpdateKeywordSetMutation>;
export type UpdateKeywordSetMutationOptions = Apollo.BaseMutationOptions<UpdateKeywordSetMutation, UpdateKeywordSetMutationVariables>;
export const KeywordSetDocument = gql`
    query KeywordSet($id: ID!, $include: [String], $createPath: Any) {
  keywordSet(id: $id, include: $include) @rest(type: "KeywordSet", pathBuilder: $createPath) {
    ...keywordSetFields
  }
}
    ${KeywordSetFieldsFragmentDoc}`;

/**
 * __useKeywordSetQuery__
 *
 * To run a query within a React component, call `useKeywordSetQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordSetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordSetQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordSetQuery(baseOptions: Apollo.QueryHookOptions<KeywordSetQuery, KeywordSetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KeywordSetQuery, KeywordSetQueryVariables>(KeywordSetDocument, options);
      }
export function useKeywordSetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordSetQuery, KeywordSetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KeywordSetQuery, KeywordSetQueryVariables>(KeywordSetDocument, options);
        }
export type KeywordSetQueryHookResult = ReturnType<typeof useKeywordSetQuery>;
export type KeywordSetLazyQueryHookResult = ReturnType<typeof useKeywordSetLazyQuery>;
export type KeywordSetQueryResult = Apollo.QueryResult<KeywordSetQuery, KeywordSetQueryVariables>;
export const KeywordSetsDocument = gql`
    query KeywordSets($include: [String], $page: Int, $pageSize: Int, $sort: String, $text: String, $createPath: Any) {
  keywordSets(
    include: $include
    page: $page
    pageSize: $pageSize
    sort: $sort
    text: $text
  ) @rest(type: "KeywordSetsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...keywordSetFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${KeywordSetFieldsFragmentDoc}`;

/**
 * __useKeywordSetsQuery__
 *
 * To run a query within a React component, call `useKeywordSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordSetsQuery({
 *   variables: {
 *      include: // value for 'include'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useKeywordSetsQuery(baseOptions?: Apollo.QueryHookOptions<KeywordSetsQuery, KeywordSetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KeywordSetsQuery, KeywordSetsQueryVariables>(KeywordSetsDocument, options);
      }
export function useKeywordSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordSetsQuery, KeywordSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KeywordSetsQuery, KeywordSetsQueryVariables>(KeywordSetsDocument, options);
        }
export type KeywordSetsQueryHookResult = ReturnType<typeof useKeywordSetsQuery>;
export type KeywordSetsLazyQueryHookResult = ReturnType<typeof useKeywordSetsLazyQuery>;
export type KeywordSetsQueryResult = Apollo.QueryResult<KeywordSetsQuery, KeywordSetsQueryVariables>;
export const LanguagesDocument = gql`
    query Languages($serviceLanguage: Boolean, $createPath: Any) {
  languages(serviceLanguage: $serviceLanguage) @rest(type: "LanguagesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...languageFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${LanguageFieldsFragmentDoc}`;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *      serviceLanguage: // value for 'serviceLanguage'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
      }
export function useLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesQueryResult = Apollo.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const CreateOrganizationDocument = gql`
    mutation CreateOrganization($input: CreateOrganizationMutationInput!) {
  createOrganization(input: $input) @rest(type: "Organization", path: "/organization/", method: "POST", bodyKey: "input") {
    ...organizationFields
  }
}
    ${OrganizationFieldsFragmentDoc}`;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation DeleteOrganization($id: ID!) {
  deleteOrganization(id: $id) @rest(type: "NoContent", path: "/organization/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const UpdateOrganizationDocument = gql`
    mutation UpdateOrganization($input: UpdateOrganizationMutationInput!) {
  updateOrganization(input: $input) @rest(type: "Organization", path: "/organization/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...organizationFields
  }
}
    ${OrganizationFieldsFragmentDoc}`;
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, options);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = Apollo.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const OrganizationDocument = gql`
    query Organization($id: ID!, $createPath: Any) {
  organization(id: $id) @rest(type: "Organization", pathBuilder: $createPath) {
    ...organizationFields
  }
}
    ${OrganizationFieldsFragmentDoc}`;

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const OrganizationsDocument = gql`
    query Organizations($child: ID, $createPath: Any, $page: Int, $pageSize: Int, $text: String) {
  organizations(child: $child, page: $page, pageSize: $pageSize, text: $text) @rest(type: "OrganizationsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...organizationFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${OrganizationFieldsFragmentDoc}`;

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *      child: // value for 'child'
 *      createPath: // value for 'createPath'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
      }
export function useOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsQueryResult = Apollo.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;
export const OrganizationClassDocument = gql`
    query OrganizationClass($id: ID!, $createPath: Any) {
  organizationClass(id: $id) @rest(type: "OrganizationClass", pathBuilder: $createPath) {
    ...organizationClassFields
  }
}
    ${OrganizationClassFieldsFragmentDoc}`;

/**
 * __useOrganizationClassQuery__
 *
 * To run a query within a React component, call `useOrganizationClassQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationClassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationClassQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useOrganizationClassQuery(baseOptions: Apollo.QueryHookOptions<OrganizationClassQuery, OrganizationClassQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationClassQuery, OrganizationClassQueryVariables>(OrganizationClassDocument, options);
      }
export function useOrganizationClassLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationClassQuery, OrganizationClassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationClassQuery, OrganizationClassQueryVariables>(OrganizationClassDocument, options);
        }
export type OrganizationClassQueryHookResult = ReturnType<typeof useOrganizationClassQuery>;
export type OrganizationClassLazyQueryHookResult = ReturnType<typeof useOrganizationClassLazyQuery>;
export type OrganizationClassQueryResult = Apollo.QueryResult<OrganizationClassQuery, OrganizationClassQueryVariables>;
export const OrganizationClassesDocument = gql`
    query OrganizationClasses($createPath: Any, $page: Int, $pageSize: Int) {
  organizationClasses(page: $page, pageSize: $pageSize) @rest(type: "OrganizationClassesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...organizationClassFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${OrganizationClassFieldsFragmentDoc}`;

/**
 * __useOrganizationClassesQuery__
 *
 * To run a query within a React component, call `useOrganizationClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationClassesQuery({
 *   variables: {
 *      createPath: // value for 'createPath'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useOrganizationClassesQuery(baseOptions?: Apollo.QueryHookOptions<OrganizationClassesQuery, OrganizationClassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationClassesQuery, OrganizationClassesQueryVariables>(OrganizationClassesDocument, options);
      }
export function useOrganizationClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationClassesQuery, OrganizationClassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationClassesQuery, OrganizationClassesQueryVariables>(OrganizationClassesDocument, options);
        }
export type OrganizationClassesQueryHookResult = ReturnType<typeof useOrganizationClassesQuery>;
export type OrganizationClassesLazyQueryHookResult = ReturnType<typeof useOrganizationClassesLazyQuery>;
export type OrganizationClassesQueryResult = Apollo.QueryResult<OrganizationClassesQuery, OrganizationClassesQueryVariables>;
export const CreatePlaceDocument = gql`
    mutation CreatePlace($input: CreatePlaceMutationInput!) {
  createPlace(input: $input) @rest(type: "Place", path: "/place/", method: "POST", bodyKey: "input") {
    ...placeFields
  }
}
    ${PlaceFieldsFragmentDoc}`;
export type CreatePlaceMutationFn = Apollo.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, options);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = Apollo.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = Apollo.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const DeletePlaceDocument = gql`
    mutation DeletePlace($id: ID!) {
  deletePlace(id: $id) @rest(type: "NoContent", path: "/place/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeletePlaceMutationFn = Apollo.MutationFunction<DeletePlaceMutation, DeletePlaceMutationVariables>;

/**
 * __useDeletePlaceMutation__
 *
 * To run a mutation, you first call `useDeletePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaceMutation, { data, loading, error }] = useDeletePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlaceMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlaceMutation, DeletePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlaceMutation, DeletePlaceMutationVariables>(DeletePlaceDocument, options);
      }
export type DeletePlaceMutationHookResult = ReturnType<typeof useDeletePlaceMutation>;
export type DeletePlaceMutationResult = Apollo.MutationResult<DeletePlaceMutation>;
export type DeletePlaceMutationOptions = Apollo.BaseMutationOptions<DeletePlaceMutation, DeletePlaceMutationVariables>;
export const UpdatePlaceDocument = gql`
    mutation UpdatePlace($input: UpdatePlaceMutationInput!) {
  updatePlace(input: $input) @rest(type: "Place", path: "/place/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...placeFields
  }
}
    ${PlaceFieldsFragmentDoc}`;
export type UpdatePlaceMutationFn = Apollo.MutationFunction<UpdatePlaceMutation, UpdatePlaceMutationVariables>;

/**
 * __useUpdatePlaceMutation__
 *
 * To run a mutation, you first call `useUpdatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaceMutation, { data, loading, error }] = useUpdatePlaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlaceMutation, UpdatePlaceMutationVariables>(UpdatePlaceDocument, options);
      }
export type UpdatePlaceMutationHookResult = ReturnType<typeof useUpdatePlaceMutation>;
export type UpdatePlaceMutationResult = Apollo.MutationResult<UpdatePlaceMutation>;
export type UpdatePlaceMutationOptions = Apollo.BaseMutationOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>;
export const PlaceDocument = gql`
    query Place($id: ID!, $createPath: Any) {
  place(id: $id) @rest(type: "Place", pathBuilder: $createPath) {
    ...placeFields
  }
}
    ${PlaceFieldsFragmentDoc}`;

/**
 * __usePlaceQuery__
 *
 * To run a query within a React component, call `usePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function usePlaceQuery(baseOptions: Apollo.QueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, options);
      }
export function usePlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, options);
        }
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = Apollo.QueryResult<PlaceQuery, PlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places($dataSource: String, $division: [String], $hasUpcomingEvents: Boolean, $page: Int, $pageSize: Int, $showAllPlaces: Boolean, $sort: String, $text: String, $createPath: Any) {
  places(
    dataSource: $dataSource
    division: $division
    hasUpcomingEvents: $hasUpcomingEvents
    page: $page
    pageSize: $pageSize
    showAllPlaces: $showAllPlaces
    sort: $sort
    text: $text
  ) @rest(type: "PlacesResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...placeFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${PlaceFieldsFragmentDoc}`;

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      division: // value for 'division'
 *      hasUpcomingEvents: // value for 'hasUpcomingEvents'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllPlaces: // value for 'showAllPlaces'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: Apollo.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, options);
      }
export function usePlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, options);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = Apollo.QueryResult<PlacesQuery, PlacesQueryVariables>;
export const CreateRegistrationDocument = gql`
    mutation CreateRegistration($input: CreateRegistrationMutationInput!) {
  createRegistration(input: $input) @rest(type: "Registration", path: "/registration/", method: "POST", bodyKey: "input") {
    ...registrationFields
  }
}
    ${RegistrationFieldsFragmentDoc}`;
export type CreateRegistrationMutationFn = Apollo.MutationFunction<CreateRegistrationMutation, CreateRegistrationMutationVariables>;

/**
 * __useCreateRegistrationMutation__
 *
 * To run a mutation, you first call `useCreateRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegistrationMutation, { data, loading, error }] = useCreateRegistrationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegistrationMutation, CreateRegistrationMutationVariables>(CreateRegistrationDocument, options);
      }
export type CreateRegistrationMutationHookResult = ReturnType<typeof useCreateRegistrationMutation>;
export type CreateRegistrationMutationResult = Apollo.MutationResult<CreateRegistrationMutation>;
export type CreateRegistrationMutationOptions = Apollo.BaseMutationOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>;
export const DeleteRegistrationDocument = gql`
    mutation DeleteRegistration($id: ID!) {
  deleteRegistration(id: $id) @rest(type: "NoContent", path: "/registration/{args.id}/", method: "DELETE") {
    noContent
  }
}
    `;
export type DeleteRegistrationMutationFn = Apollo.MutationFunction<DeleteRegistrationMutation, DeleteRegistrationMutationVariables>;

/**
 * __useDeleteRegistrationMutation__
 *
 * To run a mutation, you first call `useDeleteRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRegistrationMutation, { data, loading, error }] = useDeleteRegistrationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRegistrationMutation, DeleteRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRegistrationMutation, DeleteRegistrationMutationVariables>(DeleteRegistrationDocument, options);
      }
export type DeleteRegistrationMutationHookResult = ReturnType<typeof useDeleteRegistrationMutation>;
export type DeleteRegistrationMutationResult = Apollo.MutationResult<DeleteRegistrationMutation>;
export type DeleteRegistrationMutationOptions = Apollo.BaseMutationOptions<DeleteRegistrationMutation, DeleteRegistrationMutationVariables>;
export const UpdateRegistrationDocument = gql`
    mutation UpdateRegistration($input: UpdateRegistrationMutationInput!) {
  updateRegistration(input: $input) @rest(type: "Registration", path: "/registration/{args.input.id}/", method: "PUT", bodyKey: "input") {
    ...registrationFields
  }
}
    ${RegistrationFieldsFragmentDoc}`;
export type UpdateRegistrationMutationFn = Apollo.MutationFunction<UpdateRegistrationMutation, UpdateRegistrationMutationVariables>;

/**
 * __useUpdateRegistrationMutation__
 *
 * To run a mutation, you first call `useUpdateRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRegistrationMutation, { data, loading, error }] = useUpdateRegistrationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRegistrationMutation, UpdateRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRegistrationMutation, UpdateRegistrationMutationVariables>(UpdateRegistrationDocument, options);
      }
export type UpdateRegistrationMutationHookResult = ReturnType<typeof useUpdateRegistrationMutation>;
export type UpdateRegistrationMutationResult = Apollo.MutationResult<UpdateRegistrationMutation>;
export type UpdateRegistrationMutationOptions = Apollo.BaseMutationOptions<UpdateRegistrationMutation, UpdateRegistrationMutationVariables>;
export const RegistrationDocument = gql`
    query Registration($id: ID!, $include: [String], $createPath: Any) {
  registration(id: $id, include: $include) @rest(type: "Registration", pathBuilder: $createPath) {
    ...registrationFields
  }
}
    ${RegistrationFieldsFragmentDoc}`;

/**
 * __useRegistrationQuery__
 *
 * To run a query within a React component, call `useRegistrationQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegistrationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegistrationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useRegistrationQuery(baseOptions: Apollo.QueryHookOptions<RegistrationQuery, RegistrationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegistrationQuery, RegistrationQueryVariables>(RegistrationDocument, options);
      }
export function useRegistrationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegistrationQuery, RegistrationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegistrationQuery, RegistrationQueryVariables>(RegistrationDocument, options);
        }
export type RegistrationQueryHookResult = ReturnType<typeof useRegistrationQuery>;
export type RegistrationLazyQueryHookResult = ReturnType<typeof useRegistrationLazyQuery>;
export type RegistrationQueryResult = Apollo.QueryResult<RegistrationQuery, RegistrationQueryVariables>;
export const SendRegistrationUserAccessInvitationDocument = gql`
    mutation SendRegistrationUserAccessInvitation($id: Int!) {
  sendRegistrationUserAccessInvitation(id: $id) @rest(type: "NoContent", path: "/registration_user_access/{args.id}/send_invitation/", method: "POST", bodyKey: "id") {
    noContent
  }
}
    `;
export type SendRegistrationUserAccessInvitationMutationFn = Apollo.MutationFunction<SendRegistrationUserAccessInvitationMutation, SendRegistrationUserAccessInvitationMutationVariables>;

/**
 * __useSendRegistrationUserAccessInvitationMutation__
 *
 * To run a mutation, you first call `useSendRegistrationUserAccessInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRegistrationUserAccessInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRegistrationUserAccessInvitationMutation, { data, loading, error }] = useSendRegistrationUserAccessInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSendRegistrationUserAccessInvitationMutation(baseOptions?: Apollo.MutationHookOptions<SendRegistrationUserAccessInvitationMutation, SendRegistrationUserAccessInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendRegistrationUserAccessInvitationMutation, SendRegistrationUserAccessInvitationMutationVariables>(SendRegistrationUserAccessInvitationDocument, options);
      }
export type SendRegistrationUserAccessInvitationMutationHookResult = ReturnType<typeof useSendRegistrationUserAccessInvitationMutation>;
export type SendRegistrationUserAccessInvitationMutationResult = Apollo.MutationResult<SendRegistrationUserAccessInvitationMutation>;
export type SendRegistrationUserAccessInvitationMutationOptions = Apollo.BaseMutationOptions<SendRegistrationUserAccessInvitationMutation, SendRegistrationUserAccessInvitationMutationVariables>;
export const RegistrationsDocument = gql`
    query Registrations($adminUser: Boolean, $eventType: [EventTypeId], $include: [String], $page: Int, $pageSize: Int, $text: String, $createPath: Any) {
  registrations(
    adminUser: $adminUser
    eventType: $eventType
    include: $include
    page: $page
    pageSize: $pageSize
    text: $text
  ) @rest(type: "RegistrationsResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...registrationFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${RegistrationFieldsFragmentDoc}`;

/**
 * __useRegistrationsQuery__
 *
 * To run a query within a React component, call `useRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegistrationsQuery({
 *   variables: {
 *      adminUser: // value for 'adminUser'
 *      eventType: // value for 'eventType'
 *      include: // value for 'include'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      text: // value for 'text'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useRegistrationsQuery(baseOptions?: Apollo.QueryHookOptions<RegistrationsQuery, RegistrationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegistrationsQuery, RegistrationsQueryVariables>(RegistrationsDocument, options);
      }
export function useRegistrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegistrationsQuery, RegistrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegistrationsQuery, RegistrationsQueryVariables>(RegistrationsDocument, options);
        }
export type RegistrationsQueryHookResult = ReturnType<typeof useRegistrationsQuery>;
export type RegistrationsLazyQueryHookResult = ReturnType<typeof useRegistrationsLazyQuery>;
export type RegistrationsQueryResult = Apollo.QueryResult<RegistrationsQuery, RegistrationsQueryVariables>;
export const CreateSeatsReservationDocument = gql`
    mutation CreateSeatsReservation($input: CreateSeatsReservationMutationInput!) {
  createSeatsReservation(input: $input) @rest(type: "SeatsReservation", path: "/seats_reservation/", method: "POST", bodyKey: "input") {
    ...seatsReservationFields
  }
}
    ${SeatsReservationFieldsFragmentDoc}`;
export type CreateSeatsReservationMutationFn = Apollo.MutationFunction<CreateSeatsReservationMutation, CreateSeatsReservationMutationVariables>;

/**
 * __useCreateSeatsReservationMutation__
 *
 * To run a mutation, you first call `useCreateSeatsReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSeatsReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSeatsReservationMutation, { data, loading, error }] = useCreateSeatsReservationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSeatsReservationMutation(baseOptions?: Apollo.MutationHookOptions<CreateSeatsReservationMutation, CreateSeatsReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSeatsReservationMutation, CreateSeatsReservationMutationVariables>(CreateSeatsReservationDocument, options);
      }
export type CreateSeatsReservationMutationHookResult = ReturnType<typeof useCreateSeatsReservationMutation>;
export type CreateSeatsReservationMutationResult = Apollo.MutationResult<CreateSeatsReservationMutation>;
export type CreateSeatsReservationMutationOptions = Apollo.BaseMutationOptions<CreateSeatsReservationMutation, CreateSeatsReservationMutationVariables>;
export const UpdateSeatsReservationDocument = gql`
    mutation UpdateSeatsReservation($id: ID!, $input: UpdateSeatsReservationMutationInput!) {
  updateSeatsReservation(id: $id, input: $input) @rest(type: "SeatsReservation", path: "/seats_reservation/{args.id}/", method: "PUT", bodyKey: "input") {
    ...seatsReservationFields
  }
}
    ${SeatsReservationFieldsFragmentDoc}`;
export type UpdateSeatsReservationMutationFn = Apollo.MutationFunction<UpdateSeatsReservationMutation, UpdateSeatsReservationMutationVariables>;

/**
 * __useUpdateSeatsReservationMutation__
 *
 * To run a mutation, you first call `useUpdateSeatsReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSeatsReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSeatsReservationMutation, { data, loading, error }] = useUpdateSeatsReservationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSeatsReservationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSeatsReservationMutation, UpdateSeatsReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSeatsReservationMutation, UpdateSeatsReservationMutationVariables>(UpdateSeatsReservationDocument, options);
      }
export type UpdateSeatsReservationMutationHookResult = ReturnType<typeof useUpdateSeatsReservationMutation>;
export type UpdateSeatsReservationMutationResult = Apollo.MutationResult<UpdateSeatsReservationMutation>;
export type UpdateSeatsReservationMutationOptions = Apollo.BaseMutationOptions<UpdateSeatsReservationMutation, UpdateSeatsReservationMutationVariables>;
export const UserDocument = gql`
    query User($id: ID!, $createPath: Any) {
  user(id: $id) @rest(type: "User", pathBuilder: $createPath) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      createPath: // value for 'createPath'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users($createPath: Any, $page: Int, $pageSize: Int) {
  users(page: $page, pageSize: $pageSize) @rest(type: "UsersResponse", pathBuilder: $createPath) {
    meta {
      ...metaFields
    }
    data {
      ...userFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      createPath: // value for 'createPath'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;