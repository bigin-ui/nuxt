import { COOKIE_KEY } from "~~/enums";

export default defineNuxtRouteMiddleware((to, from) => {
  const isRequireAuth = to.meta.auth === true;
  const token = useCookie(COOKIE_KEY.access_token);

  if (isRequireAuth && !token.value) {
    return navigateTo("/auth/login");
  }
});
