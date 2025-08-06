<template>
  <div
    class="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[70px] md:h-[70px] lg:w-[200px] lg:h-[200px] bg-[var(--yellow)] text-[var(--aksara-card-text)] font-bold text-lg flex flex-col items-center justify-center rounded-[10px] overflow-hidden"
  >
    <!-- Jika ada gambar -->
    <template v-if="aksaraData.image">
      <img
        :src="aksaraData.image"
        :alt="aksaraData.latin"
        class="w-full h-[40%] object-contain"
      />
      <BaseTitle
        tag="h3"
        baseClasses="text-center font-medium text-xs lg:text-base"
      >
        {{ aksaraData.latin }}
      </BaseTitle>
    </template>

    <!-- Jika tidak ada gambar -->
    <template v-else>
      <BaseTitle
        tag="h2"
        baseClasses="font-[toba] lg:text-4xl"
      >
        {{ aksaraData.aksara }}
      </BaseTitle>
      <BaseTitle
        tag="h3"
        baseClasses="text-center font-medium text-xs lg:text-base"
      >
        {{ aksaraData.latin }}
      </BaseTitle>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseTitle from '../atoms/BaseTitle.vue'

const props = defineProps({
  aksaraData: {
    type: Object,
    required: true,
  },
})
</script>
