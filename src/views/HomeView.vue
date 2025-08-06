<template>
  <section
    class="home p-4 sm:p-6 md:p-7 lg:p-8 xl:p-8 bg-[var(--primary-white)]"
  >
    <HeroSection />
    <CardDisplay />
    <ReasonsSection />
    <IconGridSection />
  </section>
</template>

<script setup>
import HeroSection from "../components/organisms/HeroSection.vue";
import CardDisplay from "../components/organisms/CardDisplay.vue";
import IconGridSection from '../components/organisms/IconGridSection.vue';
import ReasonsSection from '../components/organisms/ReasonsSection.vue';
</script>
