<template>
  <section id="kumpulanAksara" class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-4 place-items-center py-4">
    <AksaraListItem
      v-for="huruf in hurufList"
      :key="huruf.id"
      :aksaraData="huruf"/>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import AksaraListItem from '../molecules/AksaraListItem.vue';
import ngaImg from '@/assets/images/nga2.avif';
import nyaImg from '@/assets/images/nya.avif';
import ndaImg from '@/assets/images/nda.avif';
import mbaImg from '@/assets/images/mba.webp';
const hurufList = ref([
  { id: 'huruf-a', aksara: 'a', latin: 'a' },
  { id: 'huruf-ha', aksara: 'h', latin: 'ha' },
  { id: 'huruf-ka', aksara: 'k', latin: 'ka' },
  { id: 'huruf-ba', aksara: 'b', latin: 'ba' },
  { id: 'huruf-pa', aksara: 'p', latin: 'pa' },
  { id: 'huruf-na', aksara: 'n', latin: 'na' },
  { id: 'huruf-wa', aksara: 'w', latin: 'wa' },
  { id: 'huruf-ga', aksara: 'g', latin: 'ga' },
  { id: 'huruf-ja', aksara: 'j', latin: 'ja' },
  { id: 'huruf-ra', aksara: 'r', latin: 'ra' },
  { id: 'huruf-da', aksara: 'd', latin: 'da' },
  { id: 'huruf-ma', aksara: 'm', latin: 'ma' },
  { id: 'huruf-ta', aksara: 't', latin: 'ta' },
  { id: 'huruf-sa', aksara: 's', latin: 'sa' },
  { id: 'huruf-ya', aksara: 'y', latin: 'ya' },
  { id: 'huruf-la', aksara: 'l', latin: 'la' },
  { id: 'huruf-nga', image: ngaImg, latin: 'nga' },
  { id: 'huruf-nya', image: nyaImg, latin: 'nya' },
  { id: 'huruf-nda', image: ndaImg, latin: 'nda' },
  { id: 'huruf-mba', image: mbaImg, latin: 'mba' },
]);
</script>