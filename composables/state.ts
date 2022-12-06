import { ProfileModel } from "~~/models";

export const useProfileState = () => useState<ProfileModel>("profile");

export const useCounterState = () => useState("counter");
