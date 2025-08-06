<template>
  <li :class="cardContainerClass">
    <BaseIcon :iconName="icon" :baseClasses="iconClasses" />
    <BaseTitle :baseClasses="titleClasses">{{ title }}</BaseTitle>
    <BaseText :baseClasses="descriptionClasses">{{ description }}</BaseText>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  cardContainerClass: {
    type: String,
    default: 'bg-[var(--primary-red)] h-[117px] md:w-[215px] md:h-[244px] lg:w-[200px] lg:h-[200px] xl:w-[242px] xl:h-[219px] rounded-xl flex md:flex-col xl:flex-col items-center justify-around gap-4 p-2',
  },
  iconClasses: {
    type: String,
    default: 'rounded-xl h-20 w-20 text-5xl flex items-center justify-center',
  },
  titleClasses: {
    type: String,
    default: 'font-bold text-[20px] sm:text-[25px] lg:text-[20px] md:text-center',
  },
  descriptionClasses: {
    type: String,
    default: 'hidden sm:hidden md:hidden lg:text-[15px] text-[var(--second-white)]',
  },
});
</script>