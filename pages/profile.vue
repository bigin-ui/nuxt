<template>
  <h2>User Profile</h2>
  <b-card v-if="user" class="mt-6">
    <b-row>
      <b-col span="auto">
        <b-avatar
          circle
          :size="80"
          :src="user.avatar"
          :name="user.fullName"
          gradient
        />
      </b-col>
      <b-col>
        <h3>{{ user.fullName }}</h3>
        <b-row>
          <b-col md="4" lg="3">
            <b-form-item label="Email" :value="user.email" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Phone number" :value="user.phoneNumber" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Language" :value="user.preferencedLang" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Type" :value="user.entityType" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores";

definePageMeta({ auth: true });

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

if (user.value === null) {
  await authStore.fetchUser();
}
</script>
