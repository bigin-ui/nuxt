import { unocss } from "./config";

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
  modules: ["@unocss/nuxt"],
  css: ["~/assets/scss/app.scss"],
  components: [
    "~/components",
    {
      path: "node_modules/bigin-ui/es/components",
      pattern: "**/index.mjs",
      prefix: "b",
    },
  ],
  unocss,
});
