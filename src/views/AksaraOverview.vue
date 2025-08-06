<template>
  <div>
    <HeroSectionAksara />
    <TextCollectionSection />
    <AksaraNavSection />
    <AksaraListSection />
    <EdukasiTambahan/>
    <EducationSection />
  </div>
</template>

<script setup>
import AksaraNavSection from '../components/organisms/AksaraNavSection.vue';
import AksaraListSection from '../components/organisms/AksaraListSection.vue';
import EducationSection from '../components/organisms/EducationSection.vue';
import TextCollectionSection from '../components/organisms/TextCollectionSection.vue';
import HeroSectionAksara from '../components/organisms/HeroSectionAksara.vue';
import EdukasiTambahan from '../components/EdukasiTambahan.vue';
</script>