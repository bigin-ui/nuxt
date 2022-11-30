<template>
  <b-container class="min-h-screen">
    <b-header>
      <div class="flex items-center">
        <img src="/favicon.png" class="h-8 w-8 rounded-sm" />
        <h1 class="text-3xl ml-2">Nuxt Starter</h1>
      </div>
      <div class="flex-1"></div>
      <b-button
        small
        :primary="!isAuthenticated"
        @click="navigateTo(isAuthenticated ? '/auth/logout' : '/auth/login')"
        >{{ isAuthenticated ? "Log out" : "Log in" }}</b-button
      >
    </b-header>
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

const isAuthenticated = useCookie("access_token");

useDark();
</script>
