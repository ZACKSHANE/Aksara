<template>
  <section :class="['p-4 mt-12 grid grid-cols-1 gap-8 md:px-8 xl:grid-cols-2 bg-[var(--primary-white)]', sectionClass]">
    <div v-if="mainTitle" class="col-span-full text-center">
      <BaseTitle tag="h1" :baseClasses="mainTitleClasses">{{ mainTitle }}</BaseTitle>
    </div>

    <div :class="['flex justify-center', imageColumnClass]">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        :class="imageClasses"
        loading="lazy"
        :width="imageWidth"
        :height="imageHeight"
      >
    </div>

    <div :class="['shadow-2xl p-6 rounded-2xl md:p-8', contentBoxClass]">
      <BaseTitle tag="h2" :baseClasses="headingClasses">{{ heading }}</BaseTitle>

      <ExpandableText
        :fullText="fullDescription"
        :truncatedLength="truncatedLength"
        :containerClasses="mobileDescriptionContainerClasses"
        :paragraphClasses="mobileDescriptionParagraphClasses"
        :buttonClasses="mobileDescriptionButtonClasses"
      />

      <BaseText :baseClasses="desktopDescriptionClasses">
        {{ fullDescription }}
      </BaseText>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';
import ExpandableText from '../molecules/ExpandableText.vue';

const props = defineProps({
  sectionClass: {
    type: String,
    default: '',
  },
  mainTitle: {
    type: String,
    default: '',
  },
  mainTitleClasses: {
    type: String,
    default: 'text-3xl sm:text-4xl xl:text-5xl font-bold',
  },

  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: '',
  },
  imageClasses: {
    type: String,
    default: 'object-cover rounded-xl w-full max-w-md',
  },
  imageWidth: {
    type: [String, Number],
    default: 600,
  },
  imageHeight: {
    type: [String, Number],
    default: 400,
  },
  imageColumnClass: {
    type: String,
    default: '',
  },

  heading: {
    type: String,
    required: true,
  },
  headingClasses: {
    type: String,
    default: 'text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left mb-4',
  },
  fullDescription: {
    type: String,
    required: true,
  },
  truncatedLength: {
    type: Number,
    default: 150,
  },
  contentBoxClass: {
    type: String,
    default: 'bg-[var(--primary-red)] text-[var(--primary-white)]',
  },
  mobileDescriptionContainerClasses: {
    type: String,
    default: 'md:hidden text-justify',
  },
  mobileDescriptionParagraphClasses: {
    type: String,
    default: '',
  },
  mobileDescriptionButtonClasses: {
    type: String,
    default: 'font-bold cursor-pointer select-none mt-2',
  },
  desktopDescriptionClasses: {
    type: String,
    default: 'hidden md:block text-justify text-lg',
  },
});
</script>