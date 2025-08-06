<template>
  <img
    :src="src"
    :alt="alt"
    :class="baseClasses"
    loading="lazy"
    :width="width"
    :height="height"
  />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  baseClasses: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: null, // Biarkan null jika tidak wajib, atau berikan default yang sesuai
  },
  height: {
    type: [String, Number],
    default: null, // Biarkan null jika tidak wajib, atau berikan default yang sesuai
  },
});
</script>