import { ProfileModel } from "~~/models";

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<ProfileModel | null>(null);

  const setProfile = (value: ProfileModel | null) => (profile.value = value);

  return {
    profile,
    setProfile,
  };
});
