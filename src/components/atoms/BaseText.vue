<template>
  <p :class="baseClasses"><slot></slot></p>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  baseClasses: {
    type: String,
    default: '',
  },
});
</script>