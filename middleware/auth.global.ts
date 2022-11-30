export default defineNuxtRouteMiddleware((to, from) => {
  const isRequireAuth = to.meta.auth === true;
  const token = useCookie("access_token");

  if (isRequireAuth && !token.value) {
    return navigateTo("/auth/login");
  }
});
