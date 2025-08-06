<template>
  <section class="p-4 grid gap-4 justify-center mt-12">
    <BaseTitle tag="h1" baseClasses="text-[24px] font-bold text-center md:text-[38px] mb-12">
      Mengapa Kamu Harus Mempelajarinya?
    </BaseTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-[36px] items-start justify-items-center">
      <ReasonCard
        v-for="reason in reasonsToLearn"
        :key="reason.id" :imageSrc="reason.imageSrc"
        :imageAlt="reason.imageAlt"
        :imageWidth="reason.width"
        :imageHeight="reason.height"
        :title="reason.title"
        :description="reason.description"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ReasonCard from '../molecules/ReasonCard.vue';
import BaseTitle from '../atoms/BaseTitle.vue';

import Api from "../../assets/images/api.avif";
import Bambu from "../../assets/images/bambu.avif";
import Buku from "../../assets/images/buku.avif";
import Coding from "../../assets/images/coding.avif";

const reasonsToLearn = ref([
  {
    id: 'reason-1',
    imageSrc: Api,
    imageAlt: "Aksara Batak untuk API",
    width: "148",
    height: "108",
    title: "Menguatkan Identitas Budaya",
    description: "Mempelajari aksara batak berarti menjalin kembali hubungan dengan akar leluhur dan memperkuat rasa bangga atas warisan budaya.",
  },
  {
    id: 'reason-2',
    imageSrc: Bambu,
    imageAlt: "Aksara Batak pada Bambu",
    width: "148",
    height: "108",
    title: "Melestarikan Kearifan Lokal",
    description: "Aksara ini adalah kunci memahami naskah pustaha, adat dan nilai-nilai yang diwariskan secara tekstual oleh nenek moyang.",
  },
  {
    id: 'reason-3',
    imageSrc: Buku,
    imageAlt: "Aksara Batak pada Buku",
    width: "128",
    height: "96",
    title: "Memperkaya Bahasa Daerah",
    description: "Lewat aksara, bahasa Batak mendapatkan sarana tulisnya sendiri, bukan hanya diucapkan, tetapi juga dituliskan secara autentik.",
  },
  {
    id: 'reason-4',
    imageSrc: Coding,
    imageAlt: "Aksara Batak untuk Coding/Digital",
    width: "100",
    height: "80",
    title: "Mengoptimalkan Era Digital",
    description: "Di zaman sekarang, aksara Batak bisa hidup kembali lewat media digital seperti website, aplikasi, bahkan konten media sosial.",
  },
]);
</script>