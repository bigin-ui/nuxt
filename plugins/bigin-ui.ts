import { ID_INJECTION_KEY } from "bigin-ui";
import plugins from "bigin-ui/es/plugin";

export default defineNuxtPlugin(({ vueApp }) => {
  // Provide keys
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  });

  // Register directives and global plugins
  plugins.forEach((plugin) => vueApp.use(plugin));
});
