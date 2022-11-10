<template>
  <b-container class="min-h-screen">
    <b-header>
      <div class="flex items-center">
        <b-image src="/favicon.png" class="h-8 w-8 rounded-sm" />
        <h1 class="text-3xl ml-2">Nuxt Boilerplate</h1>
      </div>
      <div class="ml-auto">
        <b-tooltip
          :open-delay="150"
          :content="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          placement="right"
        >
          <span
            :class="[
              darkMode
                ? 'i-fluent:weather-moon-16-regular'
                : 'i-fluent:weather-sunny-16-regular',
              'text-2xl',
              'block',
              'w-5',
              'h-5',
              'b-c-neutral-7',
              'hover:cursor-pointer',
              'hover:b-c-primary',
              'transition-colors',
            ]"
            @click="toggleDarkMode"
          />
        </b-tooltip>
      </div>
    </b-header>
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
