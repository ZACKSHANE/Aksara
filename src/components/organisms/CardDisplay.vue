<template>
  <div class="grid gap-10 relative sm:mt-4 lg:-mt-15 xl:mt-0 xl:grid-flow-col xl:justify-between">
    <div class="w-full mt-2 text-left xl:w-[33%] xl:ml-0 xl:-mt-9 2xl:w-[40%]">
      <BaseTitle tag="h1" baseClasses="font-bold text-2xl md:text-[25px] md:block xl:hidden">Belajar Aksara Batak</BaseTitle>
      <BaseText baseClasses="text-[12px] md:text-[18px] md:w-full xl:text-[18px] sm:w-full">Untuk memulai perjalananmu mempelajari aksara Batak, kami telah menyiapkan tiga panduan utama.</BaseText>
      <BaseText baseClasses="text-[12px] md:text-[18px] xl:text-[18px]">
        <span class="text-3xl font-bold md:text-2xl">Mulailah</span> dengan mengenal bentuk dan bunyi hurufnya, pahami cara penulisannya, lalu uji kemampuanmu melalui latihan soal yang interaktif.Silakan tekan tombol "Menu" di pojok kanan atas.
      </BaseText>
    </div>

    <div class="-mt-4 xl:absolute xl:translate-y-[-30%] xl:right-0">
      <ul class="grid gap-8 md:grid md:grid-flow-col lg:gap-10 md:justify-between xl:grid-flow-col xl:gap-12">
        <FloatingCard
          v-for="card in cards"
          :key="card.id"
          :icon="card.icon"
          :title="card.title"
          :description="card.desc"
          :cardContainerClass="cardContainerClass"
          :iconClasses="iconClass"
          :titleClasses="titleClass"
          :descriptionClasses="descClass"
          :arrowIconClasses="arrowIconClass"
        />
      </ul>
    </div>
  </div class="bg">
</template>

<script setup>
import { ref } from 'vue';
import FloatingCard from '../molecules/FloatingCard.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';

const cardContainerClass = "bg-[var(--primary-red)] h-[117px] md:w-[215px] md:h-[244px] lg:w-[200px] lg:h-[200px] xl:w-[242px] xl:h-[219px] rounded-xl flex md:flex-col xl:flex-col items-center justify-around gap-4 p-2 shadow-lg";
const iconClass = "rounded-xl h-20 w-20 text-5xl flex items-center justify-center text-[var(--primary-white)]";
const titleClass = "font-bold text-[20px] sm:text-[25px] lg:text-[22px] md:text-center";
const descClass = "hidden sm:hidden md:hidden lg:text-[15px] text-[var(--second-white)]";
const cards = ref([
  {
    id: 'card-1',
    icon: 'ri-newspaper-line',
    title: 'Kumpulan Aksara Batak',
    desc: 'Berisikan kumpulan aksara dari beberapa marga batak'
  },
  {
    id: 'card-2',
    icon: 'ri-graduation-cap-fill',
    title: 'Pemahaman Aksara Dasar',
    desc: 'Berisikan materi mengenai aksara batak'
  },
  {
    id: 'card-3',
    icon: 'ri-draft-line',
    title: 'Uji Kemampuan Dasar',
    desc: 'Berisikan latihan soal aksara batak'
  }
]);
</script>