<template>
  <div class="rounded-md shadow-lg overflow-hidden bg-[var(--second-white)] flex flex-col items-center text-center p-4">
    <BaseText baseClasses="text-xl md:text-2xl lg:text-xl xl:text-2xl whitespace-nowrap text-[var(--text-dark-red)] mb-2 font-[jainiPurva]">
      {{ title }}
    </BaseText>
    <BaseImage
      :src="imageSrc"
      :alt="`Icon ${title}`"
      baseClasses="w-full h-auto object-contain rounded"
      width="200"
      height="200"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseText from '../atoms/BaseText.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>