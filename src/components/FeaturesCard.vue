<template>
  <div class="mt-20">
    <h2 class="text-center text-xl mb-8 font-bold z-10 relative">Features</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md z-10"
      >
        <h3 class="mb-4 font-bold">{{ feature.title }}</h3>
        <p class="text-sm text-gray-400">{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    id: 0,
    title: "Project Board",
    details:
      "Each project has it's own dedicated board that shows all the tasks (Todo, Doing, Done)",
  },
  {
    id: 1,
    title: "Drag & Drop",
    details: "Tasks can be re-ordered and drag and drop to other lists",
  },
  {
    id: 2,
    title: "Chat System",
    details: "Real-time chat system to enhance communication and collaboration",
  },
]);
</script>
