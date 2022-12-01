<template>
  <h2>User Profile</h2>
  <p>{{ profileState }}</p>
</template>

<script setup lang="ts">
definePageMeta({ auth: true });

const profileState = await useProfileState();
</script>
