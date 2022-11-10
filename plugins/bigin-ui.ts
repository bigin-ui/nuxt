import { ID_INJECTION_KEY } from "bigin-ui";

export default defineNuxtPlugin(({ vueApp }) =>
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
);
