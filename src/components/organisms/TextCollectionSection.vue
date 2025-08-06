<template>
  <section class="bg-[var(--primary-white)] py-10 overflow-x-hidden">
    <div class="container mx-auto px-6">
      <BaseTitle tag="h2" baseClasses="text-5xl font-semibold mb-6">
        Kumpulan Teks Aksara Batak
      </BaseTitle>
      <BaseTitle tag="h2" baseClasses="mb-2">
        Klik Card Untuk Mengetahui Lebih Lanjut
      </BaseTitle>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <TextCollectionCard
          v-for="item in iconsData"
          :key="item.id"
          :itemData="item"
          @openModal="openModal"
        />
      </div>
    </div>

    <BaseModal :is-open="showModal" @close="closeModal" modalClasses="bg-[var(--primary-white)] p-6 rounded-xl w-11/12 max-w-md">
      <BaseTitle tag="h2" baseClasses="text-lg font-semibold mb-4">
        {{ activeItem?.title }} - Contoh Kalimat
      </BaseTitle>
      <ul class="space-y-4 text-base">
        <li v-for="(text, idx) in activeItem?.texts" :key="idx">
          <BaseText>{{ text }}</BaseText>
          <BaseText :style="{ fontFamily: activeItem?.font }" baseClasses="text-[var(--second-red)] text-lg">
            {{ text }}
          </BaseText>
        </li>
      </ul>
    </BaseModal>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';
import BaseModal from '../molecules/BaseModal.vue';
import TextCollectionCard from '../molecules/TextCollectionCard.vue';
import icon1 from '../../assets/images/icon.avif';
import icon2 from '../../assets/images/icon2.avif';
import icon21 from '../../assets/images/icon21.avif';
import icon5 from '../../assets/images/icon5.avif';
import icon4 from '../../assets/images/icon4.avif';
import icon7 from '../../assets/images/icon7.avif';
const iconsData = ref([
  {
    id: 'toba-text', src: icon1, title: "Batak Toba", font: "toba",
    texts: [
      "saya mau pergi ke pasar",
      "mereka sedang belajar",
      "aku suka menulis surat",
      "kami datang dari medan",
      "dia minum air sungai"
    ]
  },
  {
    id: 'karo-text', src: icon2, title: "Batak Karo", font: "KARO",
    texts: [
      "nari ku pasar banci",
      "bujur sada kalak",
      "tengah rami pesta",
      "kuta kampung lit",
      "urang bas gereja"
    ]
  },
  {
    id: 'simalungun-text', src: icon21, title: "Batak Simalungun", font: "simalung",
    texts: [
      "anakkon hi do hamoraon",
      "ma hita marsipature",
      "marsipature huta ni",
      "tung so ra marsala",
      "songon dia ho on"
    ]
  },
  {
    id: 'pakpak-text', src: icon4, title: "Batak Pakpak", font: "pakpak",
    texts: [
      "nami peser ke ladang",
      "endek kalak naruh",
      "turang sasada daging",
      "turit me banci balga",
      "bubuk sangap bohi"
    ]
  },
  {
    id: 'mandailing-text', src: icon5, title: "Batak Angkola",font: "mandaili",
    texts: [
      "mangan do hami di balai",
      "pos ro do angka boru",
      "ro do si abang",
      "aloi tu jabu",
      "tarlambat do si inang"
    ]
  },
  {
    id: 'mandailing-text', src: icon7, title: "Batak Mandailing", font: "mandaili",
    texts: [
      "anang do pasala",
      "dang marsahala do ho",
      "ro do amang ni",
      "jalo ni roha",
      "tarbahen sada hata"
    ]
  }
]);

const showModal = ref(false);
const activeItem = ref(null);

const openModal = (item) => {
  activeItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  activeItem.value = null;
};
</script>