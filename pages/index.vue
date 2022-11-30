<template>
  <b-container class="min-h-screen">
    <b-main class="flex flex-col items-center justify-center">
      <h1>BigIn</h1>
      <p class="text-xl b-c-neutral-7 mt-4">Build trust. Make innovation.</p>
      <b-button
        tag="a"
        href="https://bdsv3.netlify.app"
        target="blank"
        primary
        :suffix-icon="ArrowRight"
        class="mt-8"
        >Documentation</b-button
      >
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { ArrowRight } from "@bigin/icons-vue";
import { useDark, useToggle } from "@vueuse/core";

const darkMode = useDark();
const toggleDarkMode = () => useToggle(darkMode)();
</script>
