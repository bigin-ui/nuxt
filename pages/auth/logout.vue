<script setup lang="ts">
const token = useCookie("access_token");

// Clear tokens
token.value = "";

// Go to login page
navigateTo("/auth/login");
</script>

<template></template>
