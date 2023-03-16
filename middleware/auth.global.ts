import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const isRequireAuth = to.meta.auth === true;
  const hasToken = useAccessToken();
  const { $pinia } = useNuxtApp();
  const authStore = useAuthStore($pinia);
  const { user } = storeToRefs(authStore);

  console.log("[AuthMiddleware]", user.value);
  if (isRequireAuth) {
    if (!!hasToken.value) {
      if (!user.value) {
        await authStore.fetchUser();
      }
    } else {
      return navigateTo("/auth/login");
    }
  }
});
