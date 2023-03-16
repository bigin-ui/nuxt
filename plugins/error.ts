import { NuxtError } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error) => {
    console.log("[AppErrorHandler]", error);
    const { statusCode } = error as NuxtError;
    if ([401, 403].includes(statusCode)) {
      navigateTo("/auth/logout");
    }
  };
});
