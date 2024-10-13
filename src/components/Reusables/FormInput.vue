<template>
  <input
    :name="inputType"
    v-model="type"
    :type="inputType"
    class="bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-md w-full placeholder:text-gray-400"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { useUserStore } from "@/stores/users";

const Users = useUserStore();

const type = defineModel("type");

const props = defineProps({
  inputType: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>
