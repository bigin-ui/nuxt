import { ModuleOptions } from "@pinia/nuxt/dist/module";

export const pinia = {
  autoImports: ["defineStore"],
} as Partial<ModuleOptions>;
