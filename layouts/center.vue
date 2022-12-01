<template>
  <b-container class="min-h-screen pt-56px">
    <app-header />
    <b-main class="flex flex-col items-center justify-center">
      <slot />
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();
</script>
