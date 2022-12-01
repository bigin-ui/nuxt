<template>
  <h2>Protected Page</h2>
  <p class="mt-2">{{ data }}</p>
  <b-button small primary class="mt-6" @click="() => refresh()"
    >Refresh</b-button
  >
</template>

<script setup lang="ts">
const { data, error, refresh } = await useApiLazyFetch("/api/hello");

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}
</script>
