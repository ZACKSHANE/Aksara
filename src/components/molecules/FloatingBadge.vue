<template>
  <div :class="containerClasses">
    <div :class="innerContainerClasses">
      <BaseText v-if="text" :baseClasses="textClasses">{{ text }}</BaseText>
      <div v-if="iconSrc" :class="iconWrapperClasses">
        <img :src="iconSrc" :alt="iconAlt" :class="iconClasses" loading="lazy" width="40" height="40" />
      </div>
      <BaseIcon v-if="iconName" :iconName="iconName" :baseClasses="iconClasses" />
      <BaseTitle v-if="title" tag="p" :baseClasses="titleClasses">{{ title }}</BaseTitle>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseText from '../atoms/BaseText.vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseTitle from '../atoms/BaseTitle.vue';

const props = defineProps({
  containerClasses: {
    type: String,
    default: '',
  },
  innerContainerClasses: {
    type: String,
    default: 'flex items-center gap-6 rounded-full bg-[var(--blue-sea)] border-2 border-[var(--primary-white)]',
  },
  text: {
    type: String,
    default: '',
  },
  textClasses: {
    type: String,
    default: 'ml-3 md:text-[12px] lg:text-sm 2xl:text-[15px]',
  },
  iconSrc: { // Untuk logo gambar
    type: String,
    default: '',
  },
  iconAlt: {
    type: String,
    default: '',
  },
  iconName: { // Untuk ikon font
    type: String,
    default: '',
  },
  iconWrapperClasses: {
    type: String,
    default: 'h-10 w-10 rounded-full flex items-center justify-center',
  },
  iconClasses: { // Kelas untuk ikon atau gambar ikon
    type: String,
    default: 'h-8 w-auto', // Default untuk gambar
  },
  title: { // Untuk Velthoria
    type: String,
    default: '',
  },
  titleClasses: {
    type: String,
    default: 'font-bold md:text-[12px] lg:text-sm 2xl:text-[15px] text-[var(--third-red)]',
  },
});
</script>