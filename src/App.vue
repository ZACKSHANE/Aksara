<template>
  <main class="bg-gradient-to-b from-[var(--second-red)] to-red-10 flex justify-center items-center relative">
    <nav class="flex w-[90%] max-w-6xl justify-between items-center text-[var(--primary-white)] p-4">
      <!-- LOGO -->
      <div class="relative">
        <button class="flex items-center gap-2 focus:outline-none">
          <div class="h-10 w-10 rounded-full bg-[var(--primary-white)] flex items-center justify-center">
            <img :src="Logo" alt="logo velthoria" class="h-6" />
          </div>
          <p class="text-sm font-semibold text-[var(--primary-white)] hidden sm:inline">Velthoria</p>
        </button>
      </div>

      <!-- MENU DESKTOP (lg ke atas) -->
      <div v-if="isLargeScreen" class="relative">
        <div class="flex items-center gap-4 border-2 border-[var(--primary-white)] rounded-full px-3 py-1 text-[var(--primary-white]">
          <span class="text-sm font-semibold hidden xl:inline">Menu</span>
          <button
            @click="toggleDesktopMenu"
            class="h-8 w-8 flex items-center justify-center rounded-full hover:opacity-85"
          >
            <i class="ri-menu-line text-lg text-[var(--primary-white)]"></i>
          </button>
        </div>

        <!-- DROPDOWN DARI KIRI TOMBOL MENU -->
        <transition name="slide-fade">
          <div
            v-if="isDesktopMenuOpen"
            class="absolute top-14 right-0 xl:right-auto xl:left-[-220px] bg-[var(--primary-white)] text-[var(--third-red)] shadow-md rounded-lg px-6 py-4 w-48 z-50"
          >
            <ul class="flex flex-col gap-4">
              <RouterLink to="/" class="hover:text-[var(--primary-red)]" @click="isDesktopMenuOpen = false">Beranda</RouterLink>
              <RouterLink to="/about" class="hover:text-[var(--primary-red)]" @click="isDesktopMenuOpen = false">About</RouterLink>
              <RouterLink to="/belajar" class="hover:text-[var(--primary-red)]" @click="isDesktopMenuOpen = false">Mulai Belajar</RouterLink>
              <RouterLink to="/latihan" class="hover:text-[var(--primary-red)]" @click="isDesktopMenuOpen = false">Latihan Soal</RouterLink>
            </ul>
          </div>
        </transition>
      </div>

      <!-- TOMBOL MENU MOBILE -->
      <div v-else>
        <button @click="toggleSidebar" class="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--primary-white)]">
          <i class="ri-menu-line text-[var(--third-red)] text-lg"></i>
        </button>
      </div>
    </nav>

    <!-- SIDEBAR UNTUK MOBILE -->
    <transition name="fade">
      <div v-if="isSidebarOpen" class="fixed inset-0 bg-transparent bg-opacity-60 z-40" @click="isSidebarOpen = false">
        <aside class="fixed top-0 right-0 w-64 h-full bg-[var(--primary-white)] text-[var(--third-red)] shadow-lg z-50 p-6" @click.stop>
          <div class="flex justify-between items-center mb-6">
            <p class="text-lg font-bold">Navigasi</p>
            <button @click="isSidebarOpen = false" class="text-2xl">&times;</button>
          </div>
          <ul class="flex flex-col gap-4">
            <RouterLink to="/" class="hover:text-[var(--primary-red)]" @click="isSidebarOpen = false">Beranda</RouterLink>
            <RouterLink to="/about" class="hover:text-[var(--primary-red)]" @click="isSidebarOpen = false">About</RouterLink>
            <RouterLink to="/belajar" class="hover:text-[var(--primary-red)]" @click="isSidebarOpen = false">Mulai Belajar</RouterLink>
            <RouterLink to="/latihan" class="hover:text-[var(--primary-red)]" @click="isSidebarOpen = false">Latihan Soal</RouterLink>
          </ul>
        </aside>
      </div>
    </transition>
  </main>
  <RouterView />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from './assets/images/logo-v.avif'

const isLargeScreen = ref(window.innerWidth >= 1024)
const isSidebarOpen = ref(false)
const isDropdownOpen = ref(false)
const isDesktopMenuOpen = ref(false)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleDesktopMenu = () => {
  isDesktopMenuOpen.value = !isDesktopMenuOpen.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
