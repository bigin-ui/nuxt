<script setup lang="ts">
const token = useCookie("access_token");
const refreshToken = useCookie("refresh_token");

// Clear tokens
token.value = "";
refreshToken.value = "";

// Go to login page
navigateTo("/auth/login");
</script>

<template></template>
