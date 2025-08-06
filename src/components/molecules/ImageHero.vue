<template>
  <div class="relative">
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="rounded-xl object-cover w-full h-auto"
      loading="lazy"
      width="1920"
      height="1080"
    />
    <slot></slot> </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'Background Image',
  },
});
</script>