<template>
  <section class="overflow-x-hidden">
    <div class="flex items-center justify-center bg-[var(--primary-red)] px-4 py-4 flex-wrap sm:flex-nowrap text-center sm:text-left text-[var(--primary-white)]">
      <BaseImage :src="maskotSrc" alt="Maskot Belajar Aksara Batak" baseClasses="w-[100px] h-auto sm:w-[150px] sm:h-auto object-contain mr-4 mb-2 sm:mb-0" width="150" height="150" />
      <div>
        <BaseTitle tag="h2" baseClasses="text-2xl sm:text-4xl font-bold">Belajar Aksara Batak</BaseTitle>
        <BaseText baseClasses="text-[var(--second-white)] text-base sm:text-lg">Ayo Belajar Aksara Batak Bersama</BaseText>
      </div>
    </div>

    <div class="bg-[var(--second-red)] grid gap-6 p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:px-8 lg:gap-16 place-items-center">
      <AksaraNavCard
        v-for="icon in icons"
        :key="icon.id"
        :iconData="icon"
        @select="tampilkanMateri"
      />
    </div>

    <BaseModal :is-open="!!materiAktif" @close="materiAktif = null" modalClasses="bg-white text-black p-6 rounded-xl max-w-2xl w-full">
      <BaseTitle tag="h3" baseClasses="text-lg font-bold mb-4">Huruf Latin {{ materiAktif?.nama }}</BaseTitle>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center">
        <div
          v-for="(huruf, idx) in hurufInduk[materiAktif?.nama]"
          :key="idx"
          class="bg-[var(--primary-white)] rounded-xl p-3 shadow-md"
        >
          <div class="text-2xl mb-1" :style="{ fontFamily: materiAktif?.font }">
            {{ huruf }}
          </div>
          <BaseText baseClasses="text-sm text-[var(--modal-item-text)] font-semibold">
            {{ huruf }}
          </BaseText>
        </div>
      </div>
    </BaseModal>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';
import AksaraNavCard from '../molecules/AksaraNavCard.vue';
import BaseModal from '../molecules/BaseModal.vue';
import maskotSrc from '../../assets/images/maskot-2.avif';
import icon1 from '../../assets/images/icon.avif';
import icon2 from '../../assets/images/icon2.avif';
import icon21 from '../../assets/images/icon21.avif';
import icon4 from '../../assets/images/icon4.avif';
import icon5 from '../../assets/images/icon5.avif';
import icon7 from '../../assets/images/icon7.avif';
const hurufInduk = {
  'Batak Toba': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c'],
  'Batak Mandailing': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c'],
  'Batak Karo': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c'],
  'Batak Simalungun': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c'],
  'Batak Pakpak': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c'],
  'Batak Angkola': ['a','h', 'k', 'b', 'p', 'n', 'w', 'g', 'j', 'd', 'r', 'm', 't', 's', 'y', 'l', 'c']
};
const icons = ref([
  { id: 'toba-variant', aksara: 'ha', nama: 'Batak Toba', font: 'toba', src: icon1 },
  { id: 'karo-variant', aksara: 'na', nama: 'Batak Karo', font: 'KARO', src: icon2 },
  { id: 'simalungun-variant', aksara: 'ma', nama: 'Batak Simalungun', font: 'simalung', src: icon21 },
  { id: 'pakpak-variant', aksara: 'ba', nama: 'Batak Pakpak', font: 'pakpak', src: icon4 },
  { id: 'angkola-variant', aksara: 'ta', nama: 'Batak Angkola', font: 'mandaili', src: icon5 },
  { id: 'mandailing-variant', aksara: 'na', nama: 'Batak Mandailing', font: 'mandaili', src: icon7 },
]);
const materiAktif = ref(null);
function tampilkanMateri(iconData) {
  materiAktif.value = iconData;
}
</script>