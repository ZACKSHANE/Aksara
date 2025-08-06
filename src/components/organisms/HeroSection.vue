<template>
  <ImageHero :imageSrc="BgImg" imageAlt="Background Halaman Depan">

    <FloatingBadge
      containerClasses="hidden text-[var(--primary-white)] md:right-0 md:p-2 md:absolute md:block md:top-0 lg:block xl:block xl:top-0"
      :iconSrc="Logo"
      iconAlt="Logo Velthoria"
      iconWrapperClasses="h-8 w-8 rounded-full flex items-center justify-center"
      iconClasses="h-8 w-auto"
      title="Velthoria"
      innerContainerClasses="flex h-10 items-center justify-center gap-3 rounded-full border-2 border-[var(--primary-white)] bg-[var(--blue-sea)] pr-3 pl-1 opacity-85"
    />

    <FloatingAction
      containerClasses="hidden top-[70%] translate-y-[170%] translate-x-2.5 ml-4 p-4 rounded-xl w-[200px] bg-[var(--primary-red)] items-center justify-center lg:flex lg:justify-center lg:items-center lg:w-[130px] lg:h-[40px] lg:-translate-y-[175%] xl:w-[200px] xl:h-[60px] xl:translate-y-[50%] xl:absolute xl:flex"
    >
      <BaseButton baseClasses="font-bold md:text-[12px] lg:text-[14px] xl:text-[18px] text-[var(--primary-white)]"><RouterLink to="/belajar">Mulai Belajar</RouterLink></BaseButton>
    </FloatingAction>

    <FloatingAction
      containerClasses="bg-[var(--blue-sea)] absolute top-0 ml-6 translate-y-[170%] border border-[var(--primary-white)] rounded-full p-1 hidden md:block md:translate-y-[570%] lg:block lg:p-2 lg:translate-y-[410%] xl:block xl:top-33 xl:p-2 xl:translate-y-[90%] 2xl:top-28 2xl:translate-y-25"
    >
      <BaseText baseClasses="font-medium text-[6px] md:text-[8px] lg:text-[12px] xl:text-base text-[var(--primary-white)]">AYO BELAJAR</BaseText>
    </FloatingAction>

    <FloatingAction
      containerClasses="absolute w-60 ml-6 top-0 translate-y-[90%] sm:translate-y-[150%] sm:w-[272px] md:w-[319px] lg:w-[480px] xl:w-[780px] xl:translate-y-[120%] 2xl:w-[880px]"
    >
      <BaseTitle tag="h1" baseClasses="font-bold text-[var(--second-white)] text-xl md:text-2xl lg:text-4xl xl:text-[55px] 2xl:text-6xl">PELAJARI AKSARA BATAK DENGAN MUDAH DAN MENYENANGKAN</BaseTitle>
    </FloatingAction>

    <FloatingAction
      containerClasses="text-[var(--primary-white)] ml-7 hidden lg:block lg:w-[380px] lg:-translate-y-[470%] xl:block xl:-translate-y-[390%] xl:w-[540px] 2xl:block 2xl:-translate-y-[375%]"
    >
      <BaseText baseClasses="lg:text-[13px] xl:text-[21px] 2xl:text-[24px]">Klik tombol di bawah ini untuk pergi langsung ke page pembelajaran dasar Aksara Batak.</BaseText>
    </FloatingAction>

    <svg class="trapesium absolute bottom-0 right-0 translate-y-[4%] w-[250px] h-[50px] sm:w-[400px] sm:h-[100px] sm:block sm:translate-y-[11%] md:w-[600px] md:h-[150px] md:block md:translate-y-[10%] lg:w-[600px] lg:h-[200px] lg:block lg:translate-y-[-19%]" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50C14.6255 30.4456 57.4921 0 79.3665 0H250V50H0V50Z" fill="#F5EBEA"/>
      <path d="M5 50C19.3935 30.7712 60.4029 4 80.0895 4H250V50H5V50Z" fill="#9B372B"/>
    </svg>

    <svg
      class="hidden trapesium absolute bottom-0 right-0 translate-y-[10%] w-[250px] h-[50px] xl:w-[1000px] xl:h-[250px] xl:block"
      viewBox="0 0 250 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50C14.6255 26.4456 45.4921 0 49.3665 0H250V50H0V50Z"
        fill="var(--primary-white)"
      />
    </svg>
  </ImageHero>

  <div class="absolute p-2 text-[var(--primary-white)] font-bold right-14 translate-y-[-96%] sm:text-2xl sm:-translate-y-[130%] md:text-4xl md:-translate-y-[158%] lg:text-4xl lg:-translate-y-[290%] xl:hidden">
    <BaseTitle tag="h1" baseClasses="text-[var(--primary-white)]">Aksara Batak</BaseTitle>
  </div>
</template>

<script setup>
import Logo from '../../assets/images/logo-v.avif';
import BgImg from '../../assets/images/bg.avif';
import ImageHero from '../molecules/ImageHero.vue';
import FloatingBadge from '../molecules/FloatingBadge.vue';
import FloatingAction from '../molecules/FloatingAction.vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseText from '../atoms/BaseText.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
</script>