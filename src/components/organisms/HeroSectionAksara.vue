<template>
  <section class="relative p-4 grid grid-cols-1 text-center place-items-center xl:grid-cols-[1fr_2fr_1fr] xl:grid-rows-[auto_auto] w-full">
    <div class="left-0 xl:place-self-start xl:row-span-2">
      <BaseImage :src="computedMaskotSrc" alt="Maskot" baseClasses="object-contain w-full h-auto" width="300" height="400" />
    </div>

    <div class="place-self-center xl:place-self-end xl:col-start-2 xl:col-end-3">
      <div class="mb-12 flex flex-col items-center justify-center xl:items-start gap-2">
        <BaseText baseClasses="hidden lg:block lg:text-[20px] font-light leading-3">Ayo Belajar Aksara Batak</BaseText>
        <BaseTitle tag="h2" baseClasses="text-[var(--third-red)] font-bold text-3xl text-center xl:text-[64px] xl:text-left">Mengenal Aksara Batak</BaseTitle>
        <div class="w-96 xl:w-full h-[5px] bg-[var(--primary-red)]"></div>
        <BaseText baseClasses="text-sm xl:text-left xl:text-[17px] font-light">Kenali warisan aksara Batak yang penuh makna, pelajari bentuk dan bunyinya, dan biarkan budaya leluhur ini hidup kembali lewat tangan dan pikiranmu</BaseText>
        <BaseTitle tag="h3" baseClasses="text-sm xl:text-[17px] font-light">Di bawah ini beberapa aksara batak dari varian Batak Karo</BaseTitle>
        <BaseButton @click="scrollToSection('kumpulanAksara')" baseClasses="btn bg-[var(--primary-red)] text-center text-[var(--primary-white)] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">Cek Huruf Lainnya</BaseButton>
      </div>
    </div>

    <div class="w-screen place-self-center mx-auto xl:col-span-full">
      <div class="md:col-span-2 group p-8 rounded-xl overflow-hidden relative" @mouseenter="pauseAutoScroll" @mouseleave="resumeAutoScroll">
        <div class="flex items-center h-[320px] w-screen p-8 gap-10">
          <CarouselCard
            v-for="(card, index) in cards"
            :key="card.id"
            :imageSrc="card.src"
            :latin="card.latin"
            :description="card.desc"
            :cardStyle="getCardStyle(index)"
          />
        </div>
      </div>

      <div class="flex justify-center mt-6 space-x-4 text-[var(--primary-white)]">
        <BaseButton @click="goToPrevious" baseClasses="bg-[var(--third-red)] hover:bg-[var(--second-red)] px-4 py-2 rounded-lg transition-colors">← Previous</BaseButton>
        <BaseButton @click="goToNext" baseClasses="bg-[var(--third-red)] hover:bg-[var(--second-red)] px-4 py-2 rounded-lg transition-colors">Next →</BaseButton>
      </div>

      <div class="flex justify-center mt-4 space-x-2">
        <BaseButton
          v-for="(_, index) in cards"
          :key="index"
          @click="currentIndex = index"
          baseClasses="w-3 h-3 rounded-full transition-colors"
          :class="index === currentIndex ? 'bg-[var(--second-red)]' : 'bg-[var(--second-white)]'"
        ></BaseButton>
      </div>

      <BaseText baseClasses="text-center font-semibold mt-6 text-[var(--primary-red)] text-sm">
        Auto scrolls setiap 2 detik • Hover untuk pause • Current: {{ currentIndex + 1 }}/{{ cards.length }}
      </BaseText>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import BaseTitle from '../atoms/BaseTitle.vue';
import BaseText from '../atoms/BaseText.vue';
import BaseButton from '../atoms/BaseButton.vue';
import CarouselCard from '../molecules/CarouselCard.vue';
import MaskotFloat from '../../assets/images/maskot-float.avif';
import MaskotBubble from '../../assets/images/maskot-bubble.avif';
import HurufA from '../../assets/images/a-karo.avif';
import HurufB from '../../assets/images/b-karo.avif';
import HurufC from '../../assets/images/c-karo.avif';
import HurufD from '../../assets/images/d-karo.avif';
import HurufE from '../../assets/images/e-karo.avif';
const currentMaskot = ref(MaskotBubble); 

const updateMaskotSrc = () => {
  if (window.innerWidth < 1280) {
    currentMaskot.value = MaskotBubble;
  } else {
    currentMaskot.value = MaskotFloat;
  }
};

onMounted(() => {
  updateMaskotSrc();
  window.addEventListener('resize', updateMaskotSrc);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateMaskotSrc);
});

const computedMaskotSrc = computed(() => currentMaskot.value);
const currentIndex = ref(0);
const cards = ref([
  { id: 'karo-ha', latin: "ha", desc: "Varian Karo", src: HurufA },
  { id: 'karo-a', latin: "a", desc: "Varian Karo", src: HurufB },
  { id: 'karo-wa', latin: "wa", desc: "Varian Karo", src: HurufC },
  { id: 'karo-ga', latin: "ga", desc: "Varian Karo", src: HurufD },
  { id: 'karo-da', latin: "da", desc: "Varian Karo", src: HurufE },
]);

const autoScrollInterval = ref(null);
const windowWidth = ref(window.innerWidth);
const totalCards = computed(() => cards.value.length);

const handleWindowResize = () => {
  windowWidth.value = window.innerWidth;
};

const getCardStyle = (index) => {
  const position = (index - currentIndex.value + totalCards.value) % totalCards.value;

  let translateXValue = 0;
  if (windowWidth.value < 768) {
    translateXValue = position * 200;
  } else if (windowWidth.value >= 768 && windowWidth.value < 1280) {
    translateXValue = position * 250;
  } else {
    translateXValue = position * 300;
  }

  let scale = 1;
  let zIndex = 1;

  if (position === 0) {
    scale = 1.35;
    zIndex = 10;
  } else {
    scale = 1;
    zIndex = 1;
  }

  return {
    transform: `translateX(${translateXValue}px) scale(${scale})`,
    zIndex: zIndex,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  };
};

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalCards.value;
  }, 2000);
};

const pauseAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
    autoScrollInterval.value = null;
  }
};

const resumeAutoScroll = () => {
  if (!autoScrollInterval.value) {
    startAutoScroll();
  }
};

const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % totalCards.value;
  pauseAutoScroll();
  resumeAutoScroll();
};

const goToPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + totalCards.value) % totalCards.value;
  pauseAutoScroll();
  resumeAutoScroll();
};

onMounted(() => {
  startAutoScroll();
  window.addEventListener('resize', handleWindowResize);
});

onUnmounted(() => {
  pauseAutoScroll();
  window.removeEventListener('resize', handleWindowResize);
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>