import { useLocalStorage } from "@vueuse/core";

export const useAccessToken = () =>
  process.server
    ? useCookie("access_token")
    : useLocalStorage("access_token", "");

export const useRefreshToken = () =>
  process.server
    ? useCookie("refresh_token")
    : useLocalStorage("refresh_token", "");
