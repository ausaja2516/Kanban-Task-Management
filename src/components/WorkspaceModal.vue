<template>
  <div v-if="isNewUser">
    <h2>Welcome to the Dashboard, {{ currentUser?.displayName }}!</h2>
    <p>
      We're glad you've joined us. Here's a quick overview of what you can do...
    </p>
    <!-- Add more welcome content as needed -->
    <button @click="dismissWelcome">Got it!</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCurrentUser, useFirestore } from "vuefire";
import { doc, getDoc } from "firebase/firestore";

const currentUser = useCurrentUser();
const db = useFirestore();
const isNewUser = ref(false);

onMounted(async () => {
  if (currentUser.value) {
    const userDoc = await getDoc(doc(db, "Users", currentUser.value.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const createdAt = new Date(userData.createdAt);
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      isNewUser.value = createdAt > fiveMinutesAgo;
    }
  }
});

const dismissWelcome = () => {
  isNewUser.value = false;
};
</script>
