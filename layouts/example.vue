<template>
  <b-container class="min-h-screen pt-56px">
    <app-header />
    <b-container>
      <b-aside width="192px">
        <b-menu>
          <b-menu-item>Test</b-menu-item>
        </b-menu>
      </b-aside>
      <b-main class="flex flex-col">
        <slot />
      </b-main>
    </b-container>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();
</script>
