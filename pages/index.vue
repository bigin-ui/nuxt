<template>
  <b-container class="min-h-screen">
    <b-header>
      <b-row :gutter="2" items="center" class="flex-1">
        <b-col span="auto">
          <b-image src="/favicon.png" class="h-8 w-8 rounded-sm" />
        </b-col>
        <b-col span="auto" class="text-3xl font-semibold"
          >Nuxt Boilerplate</b-col
        >
        <b-col></b-col>
        <b-col span="auto">
          <b-tooltip
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
              ]"
              @click="toggleDarkMode"
            />
          </b-tooltip>
        </b-col>
      </b-row>
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

const chartData = ref({
  labels: ["Spring", "Summer", "Fall", "Winter"],
  datasets: [
    {
      label: "Dog",
      data: [40, 20, 12, 25],
    },
    {
      label: "Cat",
      data: [12, 39, 10, 40],
    },
    {
      label: "Others",
      data: [22, 12, 30, 8],
    },
  ],
});

const chartOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};
</script>
