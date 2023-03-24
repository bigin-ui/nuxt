import { Pinia } from "pinia";

// Define typing
declare module "#app" {
  interface NuxtApp {
    $pinia: Pinia;
  }
}

// Just an empty plugin for prevent error
export default defineNuxtPlugin(() => {});
