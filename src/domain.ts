export type SystemRole = 'systemAdmin';
export type OrganisationRole = 'eventOrganiser' | 'security' | 'ticketAgent' | 'reseller';

export interface SignUp {
  email: string;
  givenName: string;
  familyName: string;
  dateOfBirth: Date;
  phoneNumber: string;
}
