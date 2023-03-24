<template>
  <div class="flex items-center justify-between">
    <h2>Users</h2>
    <b-button primary small :prefix-icon="Refresh" @click="() => refresh()"
      >Refresh</b-button
    >
  </div>
  <b-card class="mt-6" body-class="p-0">
    <b-skeleton v-if="pending" animated class="p-6" />
    <b-table v-else-if="data" :data="data">
      <b-table-column
        type="index"
        :index="(index: number) => index + 1"
        label="#"
      />
      <b-table-column prop="name" label="Name" />
      <b-table-column prop="epic" label="Epic" />
      <b-table-column prop="userStore" label="User Story" />
      <b-table-column label="Employee Name">
        <template #default="{ row }">
          {{ row.employee_name.value }}
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
import { DemoModel } from "~~/models";

useHead({ title: "Demo" });
const demoService = useDemoService();

const { data, refresh, pending } = await useAsyncData<DemoModel[]>(
  async () => (await demoService.getDemoData()) as DemoModel[]
);
</script>
