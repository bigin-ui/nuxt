<script setup lang="ts">
import { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

if (props.error.statusCode.toString() === "401") {
  const token = useCookie("access_token");

  token.value = "";
  clearError({ redirect: "/auth/login" });
} else {
  console.log(props.error);
  clearError({ redirect: "/" });
}
</script>

<template></template>
