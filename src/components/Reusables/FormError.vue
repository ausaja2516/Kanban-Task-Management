<template>
  <div>
    <p class="text-xs text-red-400">
      {{ Users.errMsg }}
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/users";

const Users = useUserStore();
</script>
