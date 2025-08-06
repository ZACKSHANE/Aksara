<template>
  <button :class="baseClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  baseClasses: {
    type: String,
    default: 'font-bold text-[var(--primary-white)]',
  },
});
</script>