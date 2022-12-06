<template>
  <div class="flex items-center justify-between">
    <h2>Users</h2>
    <b-button primary small :prefix-icon="Refresh" @click="() => refresh()"
      >Refresh</b-button
    >
  </div>
  <b-card class="mt-6" body-class="p-0">
    <b-skeleton v-if="pending" animated class="p-6" />
    <b-table v-else-if="data" :data="data.entities">
      <b-table-column
        type="index"
        :index="(index: number) => index + 1"
        label="#"
      />
      <b-table-column prop="email" label="Email" />
      <b-table-column prop="fullName" label="Name" />
      <b-table-column prop="phoneNumber" label="Phone Number">
        <template #default="{ row }">
          {{ row.phoneNumber ? row.phoneNumber : "—" }}
        </template>
      </b-table-column>
      <b-table-column align="center" label="Status" width="120">
        <template #default="{ row }">
          <b-tag v-if="row.isActive" type="teal">Active</b-tag>
          <b-tag v-else type="yellow">Inactive</b-tag>
        </template>
      </b-table-column>
      <template #empty>
        <b-empty />
      </template>
    </b-table>
  </b-card>
</template>

<script setup lang="ts">
import { Refresh } from "@bigin/icons-vue";
import { API_URL } from "~~/enums";
import { EntityList, UserModel } from "~~/models";

useHead({ title: "Users" });

const { data, refresh, error, pending } = await useApiLazyFetch<
  EntityList<UserModel>
>(API_URL.demo);

if (error.value) {
  const { statusCode, statusMessage } = error.value;

  throw createError({
    statusCode,
    statusMessage,
  });
}
</script>
