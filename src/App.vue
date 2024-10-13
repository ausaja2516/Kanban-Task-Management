<script setup>
import { onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return router.push({ name: "dashboard" });
    } else {
      return router.push({ name: "home" });
    }
  });
});
</script>

<template>
  <div
    class="min-h-screen overflow-hidden font-Jakrta text-pretty bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <RouterView />
  </div>
</template>

<style>
* {
  outline: none;
}
</style>
