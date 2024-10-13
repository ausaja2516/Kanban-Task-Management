<template>
  <div class="md:px-16 lg:pr-0">
    <h1 class="text-lg font-bold">Sign up to continue</h1>

    <form
      @submit.prevent="Users.registerUser(email, pass)"
      class="flex flex-col gap-4 justify-center my-4"
    >
      <FormInput
        v-model:type="email"
        inputType="email"
        placeholder="john@example.com"
        :class="{
          '  border-red-300':
            Users.errMsg === 'Invalid email' ||
            Users.errMsg === 'The provided email is already in use' ||
            Users.errMsg === 'An error occurred during registration',
        }"
      />

      <FormError
        v-if="
          Users.errMsg === 'Invalid email' ||
          Users.errMsg === 'The provided email is already in use'
        "
      />
      <FormInput
        v-model:type="pass"
        input-type="password"
        placeholder="*********"
        :class="{
          '  border-red-300':
            Users.errMsg === 'Password field missing' ||
            Users.errMsg === 'Password is too weak' ||
            Users.errMsg === 'An error occurred during registration',
        }"
      />
      <FormError
        v-if="
          Users.errMsg === 'Password field missing' ||
          Users.errMsg === 'Password is too weak' ||
          Users.errMsg === 'An error occurred during registration'
        "
      />

      <FormButton btn-value="Sign up" btnType="submit" />

      <span class="text-sm text-gray-900 dark:text-gray-100 my-4 text-center"
        >Or</span
      >

      <FormButton
        btn-value="Google"
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

// const registerUser = async () => {
//   try {
//     const data = await createUserWithEmailAndPassword(
//       auth,
//       email.value,
//       pass.value
//     );
//     const username = data.user.email.split("@")[0];
//     data.user.displayName =
//       username.charAt(0).toUpperCase() + username.slice(1);

//     router.push({ name: "dashboard" });
//   } catch (e) {
//     switch (e.code) {
//       case "auth/email-already-exists":
//         errMsg.value = "Email already exist";
//         break;
//       case "auth/invalid-email":
//         errMsg.value = "Invalid email";
//         break;
//       case "auth/invalid-password":
//         errMsg.value = "Password must contain atleast six letters";
//         break;
//       default:
//         errMsg.value = "Email or password was incorrect";
//         break;
//     }
//   }
// };
// const googleSignIn = () => {
//   signInWithPopup(auth, new GoogleAuthProvider())
//     .then(() => {
//       router.push({ name: "dashboard" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
</script>
