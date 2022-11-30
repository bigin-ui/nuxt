import { NuxtI18nOptions } from "@nuxtjs/i18n";
import { messages } from "../i18n";

export const i18n: NuxtI18nOptions = {
  locales: [
    { code: "en", name: "English" },
    { code: "vi", name: "Tiếng Việt" },
  ],
  defaultLocale: "en",
  strategy: "no_prefix",
  vueI18n: {
    messages: {
      en: {
        welcome: "Welcome!",
        ...messages.en,
      },
      vi: {
        welcome: "Xin chào!",
        ...messages.vi,
      },
    },
  },
};
