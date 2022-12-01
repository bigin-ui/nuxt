import { ProfileModel } from "~~/models";

export const useProfileState = () =>
  useState<ProfileModel>("profile", () => ({
    id: "",
    userName: "",
    email: "",
    phoneNumber: "",
    avatar: "",
    fullName: "",
    dateOfBirth: new Date().toISOString(),
    preferencedLang: "",
    entityType: "",
  }));
