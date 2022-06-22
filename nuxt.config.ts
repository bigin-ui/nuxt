import { defineNuxtConfig } from "nuxt";
import { unocss } from "./config/unocss";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@unocss/nuxt"],
  css: ["~/assets/scss/app.scss"],
  components: [
    "~/components",
    {
      path: "node_modules/bigin-ui/es/components/",
      pattern: "**/index.mjs",
      prefix: "b",
    },
  ],
  unocss,
});
