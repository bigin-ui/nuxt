<template>
  <h1 class="c-primary-5">BigIn</h1>
  <p class="text-xl b-c-neutral-7 mt-4">Build trust. Make innovation.</p>
  <div class="flex content-center mt-8">
    <b-button primary class="mr-4" @click.prevent="navigateTo('/demo')"
      >Demo page</b-button
    >
    <b-button
      tag="a"
      href="https://bdsv3.netlify.app"
      target="blank"
      :suffix-icon="External"
      >Documentation</b-button
    >
  </div>
</template>

<script setup lang="ts">
import { External } from "@bigin/icons-vue";

definePageMeta({ layout: "center" });
</script>
