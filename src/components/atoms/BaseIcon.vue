<template>
  <i :class="[iconName, baseClasses]"></i>
</template>

<script setup>


const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  baseClasses: {
    type: String,
    default: '', // Biarkan default kosong, kelas spesifik akan diberikan dari parent atau molecular component
  },
});
</script>