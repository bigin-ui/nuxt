import { i18n, unocss, pinia } from "./config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    systemId: process.env.NUXT_API_SYSTEM_ID,
    auth: {
      clientId: "1STPARTY.APP",
      clientSecret: "P@ss4FirstPartyApp",
      grantType: {
        password: "password",
        refresh: "refresh_token",
      },
      scope:
        "resourceApi offline_access profile fileServiceApi notificationApi",
    },
  },
  app: {
    head: {
      title: "Home",
      titleTemplate: "%s - Nuxt App",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: ["@unocss/nuxt", "bigin-ui/es/nuxt", "@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/scss/app.scss"],
  unocss,
  i18n,
  pinia,
});
