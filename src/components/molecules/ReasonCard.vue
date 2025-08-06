<template>
  <div class="flex flex-row md:flex-col items-center justify-center gap-6 p-2 lg:p-6 bg-[var(--primary-red)] text-[var(--primary-white)] rounded-[15px] h-[164px] md:h-[350px] w-full max-w-sm md:max-w-none">
    <BaseImage
      :src="imageSrc"
      :alt="imageAlt"
      baseClasses="h-27 w-37 md:h-28 object-contain"
      :width="imageWidth"
      :height="imageHeight"
    />
    <div class="flex flex-col">
      <BaseTitle tag="h2" baseClasses="font-bold md:text-[19px]">{{ title }}</BaseTitle>
      <BaseText baseClasses="text-[12px] md:text-[15px]">{{ description }}</BaseText>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: '',
  },
  imageWidth: {
    type: [String, Number],
    default: null,
  },
  imageHeight: {
    type: [String, Number],
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>