<script setup lang="ts">
import { COOKIE_KEY } from "~~/enums";

const { auth } = useRuntimeConfig();
const token = useCookie(COOKIE_KEY.access_token);
const refreshToken = useCookie(COOKIE_KEY.refresh_token);

// Clear tokens
token.value = "";
refreshToken.value = "";

// Go to login page
navigateTo("/auth/login");
</script>

<template></template>
