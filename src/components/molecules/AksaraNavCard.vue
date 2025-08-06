<template>
  <div class="bg-[var(--second-white)] font-bold text-lg flex flex-col items-center justify-center gap-2 rounded-2xl overflow-hidden transform transition-transform duration-100 hover:animate-pulse w-[162px] h-[136px]"
    @click="$emit('select', iconData)">
    <BaseTitle tag="h3" baseClasses="text-xl mt-2 font-[jainiPurva]">{{ iconData.nama }}</BaseTitle>
    <div class="w-14 h-14 rounded-full bg-[var(--primary-red)] text-[var(--primary-white)] flex items-center justify-center mb-2 text-xl"
      :style="{ fontFamily: iconData.font }">
      {{ iconData.aksara }}
    </div>
    <BaseButton baseClasses="bg-[var(--second-red)] hover:bg-[var(--third-red)] text-[var(--primary-white)] py-1 px-3 rounded-full text-sm mb-1">
      Lihat Huruf →
    </BaseButton>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps({
  iconData: {
    type: Object,
    required: true,
  }
});

const emits = defineEmits(['select']);
</script>