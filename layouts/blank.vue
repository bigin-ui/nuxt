<template>
  <b-container class="min-h-screen">
    <b-main class="flex flex-col items-center justify-center">
      <slot />
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { COOKIE_KEY } from "~~/enums";

const isAuthenticated = useCookie(COOKIE_KEY.access_token);

useDark();

if (isAuthenticated.value) {
  navigateTo("/");
}
</script>
