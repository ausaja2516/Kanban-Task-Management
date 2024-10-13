<!-- <template>
  <div class="md:px-16 lg:pr-0">
    <slot name="heading" />
    <h1 class="text-lg font-bold">Sign in to continue</h1>

    <form
      @submit.prevent="Users.signIn"
      class="flex flex-col gap-4 justify-center my-4"
    >
      <FormInput
        v-model:type="email"
        inputType="email"
        placeholder="john@example.com"
        :errMsg="Users.errMsg"
      />
      <FormError
        v-if="
          Users.errMsg === 'Invalid email' ||
          Users.errMsg === 'No account with email was found'
        "
        :errMsg="Users.errMsg"
      />

      <FormInput
        v-model:type="pass"
        input-type="password"
        placeholder="*********"
        :errMsg="Users.errMsg"
      />

      <FormError
        v-if="
          Users.errMsg === 'Invalid password' ||
          Users.errMsg === 'Email or password was incorrect'
        "
        :errMsg="Users.errMsg"
      />

      <slot name="buttons" />
      <FormButton btn-value="Sign in" btnType="submit" />

      <span class="text-sm text-gray-900 dark:text-gray-100 my-4 text-center"
        >Or</span
      >

      <FormButton btnValue="Google" btnType="button" @click="googleSignIn" />
    </form>
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/users";

const Users = useUserStore();
</script> -->
