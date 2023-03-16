<script setup lang="ts">
const accessToken = useAccessToken();
const refreshToken = useRefreshToken();
const accessTokenCookie = useCookie("access_token");
const refreshTokenCookie = useCookie("refresh_token");

// Clear tokens
accessToken.value = "";
refreshToken.value = "";
accessTokenCookie.value = "";
refreshTokenCookie.value = "";

// Go to login page
navigateTo("/auth/login");
</script>

<template></template>
