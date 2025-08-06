<template>
  <div class="w-full bg-[var(--primary-red)] py-10 mt-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        <IconCard
          v-for="icon in icons"
          :key="icon.id" :title="icon.title"
          :imageSrc="icon.src"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconCard from '../molecules/IconCard.vue';
import icon from "../../assets/images/icon.avif";
import icon2 from "../../assets/images/icon2.avif";
import icon21 from "../../assets/images/icon21.avif";
import icon4 from "../../assets/images/icon4.avif";
import icon5 from "../../assets/images/icon5.avif";
import icon7 from "../../assets/images/icon7.avif";
const icons = ref([
  { id: 'batak-toba', src: icon, title: "Batak Toba" },
  { id: 'batak-karo', src: icon2, title: "Batak Karo" },
  { id: 'batak-simalungun', src: icon21, title: "Batak Simalungun" },
  { id: 'batak-pakpak', src: icon4, title: "Batak Pakpak" },
  { id: 'batak-angkola', src: icon5, title: "Batak Angkola" },
  { id: 'batak-mandailing', src: icon7, title: "Batak Mandailing" },
]);
</script>