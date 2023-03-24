import { defineStore } from "pinia";
import { ProfileModel } from "~~/models";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as ProfileModel | null,
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    async fetchUser() {
      const identityService = useIdentityService();
      try {
        const payload = await identityService.profile();

        this.user = payload!;
        this.isAuthenticated = true;
      } catch (error) {
        console.log("[fetchUser]", error);
      }
    },
  },
});
