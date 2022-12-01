<template>
  <h1>BigIn</h1>
  <p class="text-xl b-c-neutral-7 mt-4">Build trust. Make innovation.</p>
  <b-space class="mt-8">
    <b-button primary @click.prevent="navigateTo('/examples')"
      >Examples</b-button
    >
    <b-button
      tag="a"
      href="https://bdsv3.netlify.app"
      target="blank"
      :suffix-icon="External"
      >Documentation</b-button
    >
  </b-space>
</template>

<script setup lang="ts">
import { External } from "@bigin/icons-vue";

definePageMeta({ layout: "center" });
</script>
