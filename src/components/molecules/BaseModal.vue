<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div :class="['p-6 rounded-xl relative', modalClasses]">
      <BaseButton @click="$emit('close')" baseClasses="absolute top-2 right-3 text-xl font-bold text-[var(--third-red)] hover:text-[var(--primary-red)]">✕</BaseButton>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  modalClasses: {
    type: String,
    default: 'bg-white text-black max-w-2xl w-full',
  }
});

const emits = defineEmits(['close']);
</script>