<template>
  <div class="bg-[var(--second-white)] text-[var(--third-red)] rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer h-72"
    @click="$emit('openModal', itemData)">
    <div class="w-full max-w-[228px]">
      <BaseImage :src="itemData.src" :alt="`Aksara ${itemData.title}`" baseClasses="w-full h-55 object-contain mb-2" width="200" height="200" />
    </div>
    <BaseTitle tag="h3" baseClasses="mb-1 whitespace-nowrap text-2xl font-medium md:text-xl font-[jainiPurva]">
      {{ itemData.title }}
    </BaseTitle>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseTitle from '../atoms/BaseTitle.vue';

const props = defineProps({
  itemData: {
    type: Object,
    required: true,
  }
});

const emits = defineEmits(['openModal']);
</script>