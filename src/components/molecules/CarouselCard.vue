<template>
  <div class="absolute bg-[var(--primary-red)] duration-500 group-hover:blur-sm hover:!blur-none cursor-pointer p-4 rounded-xl shadow w-[163px] h-[197px] xl:w-[214px] xl:h-[259px]"
    :style="cardStyle">
    <div class="flex flex-col items-center justify-center h-full text-[var(--primary-white)]">
      <BaseImage :src="imageSrc" :alt="`Aksara Batak ${latin}`" baseClasses="object-contain w-full h-auto" width="150" height="150" />
      <BaseText baseClasses="font-semibold text-lg">{{ latin }}</BaseText>
      <BaseText baseClasses="font-extralight text-lg">{{ description }}</BaseText>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseText from '../atoms/BaseText.vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  latin: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardStyle: {
    type: Object,
    required: true,
  }
});
</script>