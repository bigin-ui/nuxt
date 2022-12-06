<template>
  <h2>User Profile</h2>
  <b-card v-if="profile" class="mt-6">
    <b-row>
      <b-col span="auto">
        <b-avatar
          circle
          :size="80"
          :src="profile.avatar"
          :name="profile.fullName"
          gradient
        />
      </b-col>
      <b-col>
        <h3>{{ profile.fullName }}</h3>
        <b-row>
          <b-col md="4" lg="3">
            <b-form-item label="Email" :value="profile.email" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Phone number" :value="profile.phoneNumber" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Language" :value="profile.preferencedLang" />
          </b-col>
          <b-col md="4" lg="3">
            <b-form-item label="Type" :value="profile.entityType" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { API_URL } from "~~/enums";
import { ProfileModel } from "~~/models";
import { useProfileStore } from "~~/stores";

definePageMeta({ auth: true });

const profileStore = useProfileStore();
const { profile } = storeToRefs(profileStore);

if (!profile.value) {
  const { data } = await useApiFetch<ProfileModel>(API_URL.profile);

  profileStore.setProfile(data.value);
}
</script>
