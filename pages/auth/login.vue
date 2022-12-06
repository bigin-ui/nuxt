<template>
  <b-card v-loading="loadingState" class="w-400px">
    <div class="flex flex-col items-center justify-center">
      <img src="/favicon.png" alt="Branding" class="w-20 h-20 my-8" />
      <h3>Welcome to Nuxt Starter!</h3>
    </div>
    <b-alert v-if="errorState" :title="errorState" type="error" class="mt-4" />
    <b-form @submit.prevent="handleLogin">
      <b-form-item label="Username" :error="validationMessage('username')">
        <b-input
          v-model="userState.username"
          placeholder="Enter your username"
        />
      </b-form-item>
      <b-form-item label="Password" :error="validationMessage('password')">
        <b-input
          v-model="userState.password"
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
import { required } from "@vuelidate/validators";
import { API_URL } from "~~/enums";

definePageMeta({ layout: "blank" });

const { t } = useI18n();
const loadingState = useState(() => false);
const errorState = useState(() => "");
const userState = useState(() => ({
  username: "",
  password: "",
}));
const rules = {
  username: { required },
  password: { required },
};
const v$ = useVuelidate(rules, userState);
const { validationMessage } = useValidationMessage(v$, t);

const handleLogin = async () => {
  v$.value.$touch();
  errorState.value = "";

  if (!v$.value.$invalid) {
    loadingState.value = true;
    const { data, error } = await useFetch(API_URL.token, {
      method: "post",
      body: {
        username: userState.value.username,
        password: userState.value.password,
      },
    });

    if (error.value) {
      errorState.value =
        "Authenticating is unsuccessful. Please check your username or password.";
    }

    if (data.value) {
      navigateTo("/");
    }

    loadingState.value = false;
  }
};
</script>
