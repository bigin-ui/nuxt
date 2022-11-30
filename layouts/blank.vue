<template>
  <b-container class="min-h-screen">
    <b-main class="flex flex-col items-center justify-center">
      <slot />
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isAuthenticated = useCookie("access_token");

useDark();

if (isAuthenticated.value) {
  navigateTo("/");
}
</script>
