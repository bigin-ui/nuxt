import { NuxtError } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, _) => {
    const { statusCode } = error as NuxtError;

    if (["401", "403"].includes(statusCode.toString())) {
      navigateTo("/auth/logout");
    }
  };
});
