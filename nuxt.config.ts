import { i18n, unocss, pinia } from "./config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
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
