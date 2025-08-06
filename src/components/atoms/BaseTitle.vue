<template>
  <component :is="tag" :class="baseClasses">
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'span', // Bisa h1, h2, span, dll.
  },
  baseClasses: {
    type: String,
    default: 'font-bold',
  },
});
</script>