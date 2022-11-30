<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <h1>BigIn</h1>
    <p class="text-xl b-c-neutral-7 mt-4">Build trust. Make innovation.</p>
    <b-button
      tag="a"
      href="https://bdsv3.netlify.app"
      target="blank"
      primary
      :suffix-icon="External"
      class="mt-8"
      >Documentation</b-button
    >
  </div>
</template>

<script setup lang="ts">
import { External } from "@bigin/icons-vue";
import { useDark } from "@vueuse/core";

useDark();
</script>
