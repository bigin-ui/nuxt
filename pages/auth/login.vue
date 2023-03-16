<template>
  <b-card v-loading="state.loading" class="w-400px">
    <div class="flex flex-col items-center justify-center">
      <img src="/favicon.png" alt="Branding" class="w-20 h-20 my-8" />
      <h3>Welcome to Nuxt Starter!</h3>
    </div>
    <b-alert
      v-if="state.error"
      :title="state.error"
      type="error"
      class="mt-4"
    />
    <b-form @submit.prevent="handleLogin">
      <b-form-item
        :label="t('vuelidate.fields.email')"
        :error="validationMessage('email')"
      >
        <b-input v-model="state.email" placeholder="Enter your email" />
      </b-form-item>
      <b-form-item
        :label="t('vuelidate.fields.password')"
        :error="validationMessage('password')"
      >
        <b-input
          v-model="state.password"
          show-password
          placeholder="Enter your password"
        />
      </b-form-item>
      <div class="flex justify-end mt-6">
        <b-button primary native-type="submit" :suffix-icon="ArrowRight"
          >Log in</b-button
        >
      </div>
    </b-form>
  </b-card>
</template>

<script setup lang="ts">
import { ArrowRight } from "@bigin/icons-vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useIdentityService } from "~~/composables/services";
import { useAuthStore } from "~~/stores";

definePageMeta({ layout: "blank" });
useHead({ title: "Login" });

const identityService = useIdentityService();
const authStore = useAuthStore();

const { t } = useI18n();
const state = reactive({
  loading: false,
  error: "",
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required },
};
const v$ = useVuelidate(rules, state, { $scope: false });
const { validationMessage } = useValidationMessage(v$, t);

const handleLogin = async () => {
  v$.value.$touch();
  state.error = "";

  if (!v$.value.$invalid) {
    try {
      state.loading = true;
      const loggedIn = await identityService.connect({
        username: state.email,
        password: state.password,
      });

      if (loggedIn) {
        await authStore.fetchUser();

        navigateTo("/");
      }
    } catch (error) {
      state.error =
        "Authenticating is unsuccessful. Please check your username or password.";
    } finally {
      state.loading = true;
    }
  }
};
</script>
