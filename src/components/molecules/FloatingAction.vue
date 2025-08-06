<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  containerClasses: {
    type: String,
    default: '',
  },
});
</script>