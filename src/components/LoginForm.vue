<template>
  <div class="md:px-16 lg:pr-0">
    <h1 class="text-lg font-bold">Sign in to continue</h1>

    <form
      @submit.prevent="Users.signIn(email, pass)"
      class="flex flex-col gap-4 justify-center my-4"
    >
      <FormInput
        v-model:type="email"
        inputType="email"
        placeholder="john@example.com"
        :class="{
          'border border-red-300':
            Users.errMsg === 'Invalid email' ||
            Users.errMsg === 'Wrong password or account not found' ||
            Users.errMsg === 'An error occurred during registration',
        }"
      />

      <FormError v-if="Users.errMsg === 'Invalid email'" />

      <FormInput
        v-model:type="pass"
        input-type="password"
        placeholder="*********"
        :class="{
          'border border-red-300':
            Users.errMsg === 'Password field missing' ||
            Users.errMsg === 'Wrong password or account not found' ||
            Users.errMsg === 'An error occurred during registration',
        }"
      />

      <FormError
        v-if="
          Users.errMsg === 'Wrong password or account not found' ||
          Users.errMsg === 'Password field missing' ||
          Users.errMsg === 'An error occurred during registration'
        "
      />

      <FormButton btn-value="Sign in" btnType="submit" />

      <span class="text-sm text-gray-900 dark:text-gray-100 my-4 text-center"
        >Or</span
      >

      <FormButton
        btnValue="Google"
        btnType="button"
        @click="Users.googleSignIn"
      />
    </form>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormButton from "./Reusables/FormButton.vue";
import FormInput from "./Reusables/FormInput.vue";
import FormError from "./Reusables/FormError.vue";
import { useUserStore } from "@/stores/users";

const Users = useUserStore();

const email = ref("");
const pass = ref("");
</script>
