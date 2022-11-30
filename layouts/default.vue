<template>
  <b-container class="min-h-screen">
    <b-header>
      <div class="flex items-center">
        <img src="/favicon.png" class="w-8 h-8" />
        <h1 class="text-3xl ml-2">Nuxt App</h1>
      </div>
    </b-header>
    <b-main class="flex flex-col">
      <slot />
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();
</script>
