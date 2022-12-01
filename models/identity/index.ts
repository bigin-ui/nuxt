export interface ProfileModel {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  fullName: string;
  dateOfBirth: Date | string;
  preferencedLang: string;
  entityType: string;
}

export interface TokenModel {
  access_token: string;
  refresh_token: string;
}
