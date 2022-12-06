<template>
  <b-header shadow fixed height="56px">
    <nuxt-link to="/" class="flex items-center">
      <img src="/favicon.png" class="h-8 w-8 rounded-sm" />
      <h1 class="text-3xl ml-2">Nuxt Starter</h1>
    </nuxt-link>
    <div class="flex-1"></div>
    <b-dropdown
      v-if="isAuthenticated && profileState?.id.length"
      @command="handleCommand"
    >
      <div
        class="inline-flex items-center p-1 hover:cursor-pointer hover:b-bg-neutral-2 aria-expanded:b-bg-neutral-2 rounded-max"
      >
        <b-avatar
          :src="profileState.avatar"
          :name="profileState.fullName"
          circle
          :size="24"
        />
        <span class="font-semibold px-2">{{ profileState.fullName }}</span>
        <b-icon class="mr-1">
          <ActionDown />
        </b-icon>
      </div>

      <template #dropdown>
        <b-dropdown-menu class="min-w-40">
          <b-dropdown-item :icon="Profile" command="profile"
            >Profile</b-dropdown-item
          >
          <b-dropdown-item :icon="SignOut" command="logout"
            >Log out</b-dropdown-item
          >
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-button v-else primary small @click="navigateTo('/auth/login')"
      >Log in</b-button
    >
  </b-header>
</template>

<script setup lang="ts">
import { ActionDown, Profile, SignOut } from "@bigin/icons-vue";
import { API_URL, COOKIE_KEY } from "~~/enums";
import { ProfileModel } from "~~/models";

const isAuthenticated = useCookie(COOKIE_KEY.access_token);
const profileState = useProfileState();

const handleCommand = (command: string) => {
  switch (command) {
    case "profile":
      navigateTo("/profile");
      break;

    case "logout":
      navigateTo("/auth/logout");
      break;

    default:
      break;
  }
};

watchEffect(async () => {
  if (
    !!isAuthenticated.value &&
    (profileState.value === null || profileState.value?.id === "")
  ) {
    const { data } = await useApiFetch<ProfileModel>(API_URL.profile);

    profileState.value = data.value!;
  }
});
</script>
