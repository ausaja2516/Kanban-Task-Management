<template>
  <div>
    <button
      :type="btnType"
      class="py-2 bg-clrPurple font-semibold tracking-wide rounded-md w-full"
      :class="{
        'bg-transparent border border-clrPurple': btnValue === 'Google',
        'text-gray-100': btnValue !== 'Google',
      }"
    >
      {{ btnValue }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  btnValue: {
    type: String,
  },
  btnType: {
    type: String,
  },
});
</script>
