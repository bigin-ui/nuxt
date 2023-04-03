import { ID_INJECTION_KEY } from "bigin-ui";
import plugins from "bigin-ui/es/plugin";

export default defineNuxtPlugin(({ vueApp }) => {
  // Provide keys
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  });

  // Exclude web components
  vueApp.config.compilerOptions.isCustomElement = (tag) =>
    ["lottie-player", "swiper-container", "swiper-slide"].includes(tag);

  // Register directives and global plugins
  plugins.forEach((plugin) => vueApp.use(plugin));
});
