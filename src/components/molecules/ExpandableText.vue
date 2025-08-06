<template>
  <div :class="containerClasses">
    <BaseText v-if="!isExpanded" :baseClasses="paragraphClasses">
      {{ truncatedText }}
    </BaseText>
    <BaseText v-else :baseClasses="paragraphClasses">
      {{ fullText }}
    </BaseText>
    <BaseButton
      @click="toggleExpand"
      :baseClasses="buttonClasses"
    >
      {{ isExpanded ? 'Tutup' : 'Baca Selengkapnya...' }}
    </BaseButton>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import BaseText from '../atoms/BaseText.vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps({
  fullText: {
    type: String,
    required: true,
  },
  truncatedLength: {
    type: Number,
    default: 150, // Default panjang teks yang ditampilkan awalnya
  },
  containerClasses: {
    type: String,
    default: 'md:hidden text-justify',
  },
  paragraphClasses: {
    type: String,
    default: '',
  },
  buttonClasses: {
    type: String,
    default: 'font-bold cursor-pointer select-none mt-2', // Tambahkan warna dari parent
  },
});

const isExpanded = ref(false);

const truncatedText = computed(() => {
  return props.fullText.length > props.truncatedLength
    ? props.fullText.substring(0, props.truncatedLength) + '...'
    : props.fullText;
});

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>