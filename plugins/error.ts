import { NuxtError } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    const { statusCode } = error as NuxtError;

    if ([401, 403].includes(statusCode)) {
      context?.$router.push("/auth/logout");
    }
  };
});
