<template>
  <div class="flex h-screen bg-[var(--primary-white)]">
    <!-- Sidebar -->
    <div
      :class="{
        'w-64': isSidebarOpen,
        'w-14': !isSidebarOpen && windowWidth < 1280
      }"
      class="bg-[var(--second-red)] shadow-lg transition-all duration-300 ease-in-out flex-shrink-0 absolute z-40 h-full xl:relative xl:w-64"
    >
      <div class="p-4 relative h-full">
        <button
          @click="toggleSidebar"
          class="block xl:hidden absolute top-4 right-4 text-[var(--primary-white)] text-2xl z-50 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <span v-if="isSidebarOpen">✕</span>
          <span v-else>☰</span>
        </button>

        <div :class="{ 'opacity-0 pointer-events-none': !isSidebarOpen && (windowWidth < 1280) }" class="transition-opacity duration-300 delay-100">
          <h1 class="text-2xl font-bold text-[var(--primary-white)] mb-8" :class="{ 'hidden md:block': !isSidebarOpen }">
            Latihan Soal
          </h1>
          <nav>
            <div
              v-for="category in categories"
              :key="category.id"
              @click="selectCategory(category)"
              :class="[
                'nav-item cursor-pointer p-4 rounded-lg mb-3 transition-all duration-200 flex items-center',
                selectedCategory?.id === category.id
                  ? 'bg-[var(--primary-red)]'
                  : 'hover:bg-[var(--third-red)]',
              ]"
            >
              <span class="text-2xl mr-3">{{ category.icon }}</span>
              <span
                class="text-[var(--primary-white)] font-medium whitespace-nowrap overflow-hidden transition-all duration-150 ease-in-out"
                :class="{ 'w-0 opacity-0 ml-0': !isSidebarOpen && (windowWidth < 1280), 'w-auto opacity-100 ml-3': isSidebarOpen || windowWidth >= 1280 }"
              >
                {{ category.name }}
              </span>
            </div>
          </nav>
          <div class="absolute bottom-4 left-0 right-0 px-4 text-white">
            <button @click="$router.push({ name: 'Home' })">
              ⬅ Kembali ke Home
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 overflow-y-auto">
      <div v-if="!selectedCategory" class="text-center py-20">
        <div class="slide-in xl:text-xl flex flex-col justify-center items-center">
          <h2 class="text-xl xl:text-4xl font-bold mb-4">
            Selamat Datang!
          </h2>
          <p class="w-[50%] sm:w-89 xl:w-[50%] max-w-lg mx-auto">Pastikan kamu sudah membaca materi mengenai Aksara Batak yang ada di website ini ya. Pilih kategori latihan soal dari menu sebelah kiri</p>
          <div class="mt-8 text-6xl">📚</div>
        </div>
      </div>

      <!-- Quiz Content -->
      <div v-else-if="selectedCategory?.type === 'quiz'" class="fade-in">
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-bold text-[var(--third-red)]">
              {{ selectedCategory.name }}
            </h2>
            <div v-if="quizStarted && !quizCompleted" class="flex items-center space-x-4">
              <div class="relative w-16 h-16">
                <svg class="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="transparent"
                    class="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="transparent"
                    :stroke-dashoffset="283 - (283 * timeLeft) / 90"
                    class="timer-circle text-[var(--primary-red)]"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-lg font-bold">{{
                    timeLeft
                  }}</span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500">Soal</div>
                <div class="text-lg font-bold">
                  {{ currentQuestionIndex + 1 }}/{{ currentQuiz.length }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!quizStarted" class="text-center py-12">
          <div
            class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto"
          >
            <div class="text-6xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold text-primary-black mb-4">
              Siap Memulai?
            </h3>
            <p class="text-gray-600 mb-6">
              {{ currentQuiz.length }} soal menunggu Anda!
            </p>
            <button
              @click="startQuiz"
              class="bg-[var(--primary-red)] text-[var(--primary-white)] px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              Mulai Latihan
            </button>
          </div>
        </div>

        <div v-else-if="!quizCompleted" class="fade-in">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-[var(--third-red)] mb-4">
                {{ currentQuestion.question }}
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="selectAnswer(option, index)"
                :disabled="answerSelected"
                :class="[
                  'option-button p-4 rounded-lg text-left font-medium border-2 transition-all duration-300',
                  getOptionClass(option, index),
                  { 'flex justify-center items-center': option.type === 'image' }
                ]"
              >
                <span class="font-bold mr-2" v-if="option.type === 'text'">{{ String.fromCharCode(65 + index) }}.</span>
                <span v-if="option.type === 'text'" :style="{ fontFamily: option.font }">{{ option.value }}</span>
                <img
                  v-else-if="option.type === 'image'"
                  :src="option.src"
                  :alt="option.alt"
                  class="max-h-24 max-w-full object-contain"
                  loading="lazy"
                  @error="handleImageError"
                />
              </button>
            </div>

            <div v-if="answerSelected" class="mt-6 text-center">
              <button
                @click="nextQuestion"
                class="bg-[var(--primary-red)] text-[var(--primary-white)] px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-all duration-200"
              >
                {{
                  currentQuestionIndex < currentQuiz.length - 1
                    ? "Soal Berikutnya"
                    : "Selesai"
                }}
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12">
          <div
            class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto bounce-animation"
          >
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold text-primary-black mb-4">
              Latihan Selesai!
            </h3>
            <div class="text-3xl font-bold text-primary-red mb-4">
              {{ score }}/{{ currentQuiz.length }}
            </div>
            <p class="text-gray-600 mb-6">
              Skor: {{ Math.round((score / currentQuiz.length) * 100) }}%
            </p>
            <button
              @click="restartQuiz"
              class="bg-[var(--primary-red)] text-[var(--primary-white)] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-200"
            >
              Ulangi Latihan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import mbaImg from "../assets/images/mba.webp";
import ndaImg from "../assets/images/nda.avif";
import ngaImg from "../assets/images/bgnga.png"; 
import nyaImg from "../assets/images/nya.avif";

const isSidebarOpen = ref(true);
const windowWidth = ref(window.innerWidth);
const selectedCategory = ref(null);
const quizStarted = ref(false);
const quizCompleted = ref(false);
const currentQuestionIndex = ref(0);
const timeLeft = ref(120);
const timer = ref(null);
const answerSelected = ref(false);
const selectedAnswerIndex = ref(null);
const score = ref(0);

const categories = ref([
  {
    id: 1,
    name: "Huruf Aksara",
    icon: "🔢",
    type: "quiz",
    questions: [
      {
        question: "Manakah huruf aksara Batak Toba 'Ka'?",
        options: [
          { type: 'text', value: "k", font: "toba" },
          { type: 'text', value: "t", font: "KARO" },
          { type: 'text', value: "ka", font: "mandaili" },
          { type: 'text', value: "k", font: "simalung" }
        ],
        correct: { type: 'text', value: "k", font: 'toba' },
      },
      {
        question: "Manakah huruf aksara Batak Karo 'Ta'?",
        options: [
          { type: 'text', value: "m", font: 'toba' },
          { type: 'text', value: "t", font: 'KARO' },
          { type: 'text', value: "p", font: 'toba' },
          { type: 'text', value: "t", font: 'mandaili' }
        ],
        correct: { type: 'text', value: "t", font: 'KARO' },
      },
      {
        question: "Huruf 'sa' dalam aksara Batak Angkola ",
        options: [
          { type: 'text', value: "m", font: 'KARO' },
          { type: 'text', value: "s", font: 'mandaili' },
          { type: 'text', value: "p", font: 'toba' },
          { type: 'text', value: "d", font: 'toba' }
        ],
        correct: { type: 'text', value: "s", font: 'mandaili' },
      },
      {
        question: "Manakah huruf aksara Batak Toba 'ma'?",
        options: [
          { type: 'text', value: "m", font: 'mandaili' },
          { type: 'text', value: "p", font: 'toba' },
          { type: 'text', value: "b", font: 'pakpak' },
          { type: 'text', value: "m", font: 'toba' }
        ],
        correct: { type: 'text', value: "m", font: 'toba' },
      },
      {
        question: "huruf 'nya'dalam aksara Batak",
        options: [
          { type: 'image', src: ndaImg, alt: 'Aksara Nda' },
          { type: 'image', src: ngaImg, alt: 'Aksara Nga' },
          { type: 'image', src: mbaImg, alt: 'Aksara Mba' },
          { type: 'image', src: nyaImg, alt: 'Aksara Nya' },
        ],
        correct: { type: 'image', src: nyaImg, alt: 'Aksara Nya' },
      },
      {
        question: "Manakah huruf aksara Batak pakpak 'Ma'?",
        options: [
          { type: 'text', value: "g", font: 'toba' },
          { type: 'text', value: "w", font: 'toba' },
          { type: 'text', value: "m", font: 'pakpak' },
          { type: 'text', value: "p", font: 'toba' }
        ],
        correct: { type: 'text', value: "m", font: 'pakpak' },
      },
      {
        question: "Manakah huruf aksara Batak Simalungun 'ra'?",
        options: [
          { type: 'text', value: "r", font: 'simalung' },
          { type: 'text', value: "a", font: 'pakpak' },
          { type: 'text', value: "h", font: 'pakpak' },
          { type: 'text', value: "r", font: 'pakpak' }
        ],
        correct: { type: 'text', value: "r", font: 'simalung' },
      },
      {
        question: "Aksara batak toba 'ra'",
        options: [
          { type: 'text', value: "r", font: 'toba' },
          { type: 'text', value: "h", font: 'toba' },
          { type: 'text', value: "d", font: 'toba' },
          { type: 'text', value: "l", font: 'pakpak' }
        ],
        correct: { type: 'text', value: "r", font: 'toba' },
      },
      {
        question: "Aksara Batak karo 'pa' ?",
        options: [
          { type: 'text', value: "p", font: 'KARO' },
          { type: 'text', value: "g", font: 'pakpak' },
          { type: 'text', value: "w", font: 'pakpak' },
          { type: 'text', value: "g", font: 'toba' }
        ],
        correct: { type: 'text', value: "p", font: 'KARO' },
      },
      {
        question: "Manakah huruf aksara Batak karo 'Da'?",
        options: [
          { type: 'text', value: "s", font: 'KARO' },
          { type: 'text', value: "d", font: 'KARO' },
          { type: 'text', value: "a", font: 'KARO' },
          { type: 'text', value: "a", font: 'toba' }
        ],
        correct: { type: 'text', value: "d", font: 'KARO' },
      },
      {
        question: "Huruf 'Ca' dalam aksara Batak Pakpak adalah...",
        options: [
          { type: 'text', value: "c", font: 'pakpak' },
          { type: 'text', value: "d", font: 'toba' },
          { type: 'text', value: "c", font: 'KARO' },
          { type: 'text', value: "d", font: 'pakpak' }
        ],
        correct: { type: 'text', value: "c", font: 'pakpak' },
      },
      {
        question: "huruf 'mba' dalam aksara Batak",
        options: [
          { type: 'image', src: ndaImg, alt: 'Aksara Nda' },
          { type: 'image', src: ngaImg, alt: 'Aksara Nga' },
          { type: 'image', src: mbaImg, alt: 'Aksara Mba' },
          { type: 'image', src: nyaImg, alt: 'Aksara Nya' },
        ],
        correct: { type: 'image', src: mbaImg, alt: 'Aksara Mba' },
      },
      {
        question: "Manakah huruf aksara Batak pakpak 'Ba'?",
        options: [
          { type: 'text', value: "b", font: 'pakpak' },
          { type: 'text', value: "w", font: 'pakpak' },
          { type: 'text', value: "n", font: 'toba' },
          { type: 'text', value: "b", font: 'KARO' }
        ],
        correct: { type: 'text', value: "b", font: 'pakpak' },
      },
      {
        question: "Huruf 'Pa' dalam aksara Batak simalungun",
        options: [
          { type: 'text', value: "p", font: 'simalung' },
          { type: 'text', value: "h", font: 'toba' },
          { type: 'text', value: "w", font: 'KARO' },
          { type: 'text', value: "h", font: 'toba' }
        ],
        correct: { type: 'text', value: "p", font: 'simalung' },
      },
      {
        question: "Huruf 'wa' dalam aksara batak toba",
        options: [
          { type: 'text', value: "w", font: 'toba' },
          { type: 'text', value: "w", font: 'pakpak' },
          { type: 'text', value: "m", font: 'karo' },
          { type: 'text', value: "h", font: 'toba' }
        ],
        correct: { type: 'text', value: "w", font: 'toba' },
      },
      {
        question: "huruf 'nda'dalam aksara Batak Toba",
        options: [
          { type: 'image', src: ndaImg, alt: 'Aksara Nda' },
          { type: 'image', src: ngaImg, alt: 'Aksara Nga' },
          { type: 'image', src: mbaImg, alt: 'Aksara Mba' },
          { type: 'image', src: nyaImg, alt: 'Aksara Nya' },
        ],
        correct: { type: 'image', src: ndaImg, alt: 'Aksara Nda' },
      },
    ],
  },
  {
    id: 2,
    name: "Tanda Baca",
    icon: "📖",
    type: "quiz",
    questions: [
      {
        question: "Apa fungsi utama dari Pangolat?",
        options: [
          { type: 'text', value: "Mengubah vokal inheren menjadi 'i'", font: 'Umum' },
          { type: 'text', value: "Menjadikan konsonan mati (menghilangkan vokal inheren)", font: 'Umum' },
          { type: 'text', value: "Menggandakan konsonan", font: 'Umum' },
          { type: 'text', value: "Menandai akhir kalimat", font: 'Umum' },
        ],
        correct: { type: 'text', value: "Menjadikan konsonan mati (menghilangkan vokal inheren)", font: 'Umum' },
      },
      {
        question: "Di manakah posisi umum Panulus  diletakkan relatif terhadap Ina Ni Surat?",
        options: [
          { type: 'text', value: "Di bawah Ina Ni Surat", font: 'Umum' },
          { type: 'text', value: "Di samping kanan Ina Ni Surat", font: 'Umum' },
          { type: 'text', value: "Di atas Ina Ni Surat", font: 'Umum' },
          { type: 'text', value: "Di awal kata", font: 'Umum' },
        ],
        correct: { type: 'text', value: "Di atas Ina Ni Surat", font: 'Umum' },
      },
      {
        question: "Bagaimana cara menulis Ina Ni Surat 'pa'  agar menjadi bunyi 'pu'?",
        options: [
          { type: 'text', value: "diberikan tanda panulus", font: 'Umum' },
          { type: 'text', value: "diberikan tanda pangolat", font: 'Umum' },
          { type: 'text', value: "diberikan tanda panonggial", font: 'Umum' },
          { type: 'text', value: "diberikan tanda pangulut", font: 'Umum' }
        ],
        correct: { type: 'text', value: "diberikan tanda panonggial", font: 'Umum' },
      },
      {
        question: "Jika Anda ingin menulis konsonan 't' tanpa vokal, diakritik apa yang harus ditambahkan pada Ina Ni Surat 'ta' ?",
        options: [
          { type: 'text', value: "Panulus", font: 'Umum' },
          { type: 'text', value: "Panonggial", font: 'Umum' },
          { type: 'text', value: "Pangolat", font: 'Umum' },
          { type: 'text', value: "Pangulut", font: 'Umum' },
        ],
        correct: { type: 'text', value: "Pangolat", font: 'Umum' },
      },
      {
        question: "Apa perbedaan fungsi antara Bindu Pinarboras  dan Tanda Akhir ",
        options: [
          { type: 'text', value: "Bindu Pinarboras untuk huruf kapital, Tanda Akhir untuk huruf kecil.", font: 'Umum' },
          { type: 'text', value: "Bindu Pinarboras untuk nama orang, Tanda Akhir untuk tempat.", font: 'Umum' },
          { type: 'text', value: "Bindu Pinarboras sebagai pemisah frasa/klausa, Tanda Akhir sebagai penanda selesainya sebuah teks.", font: 'Umum' },
          { type: 'text', value: "Bindu Pinarboras untuk awal paragraf, Tanda Akhir untuk akhir paragraf.", font: 'Umum' },
        ],
        correct: { type: 'text', value: "Bindu Pinarboras sebagai pemisah frasa/klausa, Tanda Akhir sebagai penanda selesainya sebuah teks.", font: 'Umum' },
      },
      {
        question: "Bagaimana bunyi Ina Ni Surat 'na' jika ditambahkan Panonggial ?",
        options: [
          { type: 'text', value: "ni", font: 'Umum' },
          { type: 'text', value: "nu", font: 'Umum' },
          { type: 'text', value: "ne", font: 'Umum' },
          { type: 'text', value: "no", font: 'Umum' }
        ],
        correct: { type: 'text', value: "nu", font: 'Umum' },
      },
      {
        question: "Tanda baca apa yang digunakan untuk menggandakan konsonan (membuat konsonan rangkap) dalam beberapa varian Aksara Batak?",
        options: [
          { type: 'text', value: "Bindu", font: 'Umum' },
          { type: 'text', value: "Pangolat", font: 'Umum' },
          { type: 'text', value: "Pangulut", font: 'Umum' },
          { type: 'text', value: "Panulus", font: 'Umum' }
        ],
        correct: { type: 'text', value: "Pangulut", font: 'Umum' },
      },
      {
        question: "Bagaimana Anda akan menuliskan Ina Ni Surat 'ga' jika vokal inherennya dihilangkan?",
        options: [
          { type: 'text', value: "g", font: 'KARO' },
          { type: 'text', value: "ha", font: 'KARO' },
          { type: 'text', value: "ga", font: 'KARO' },
          { type: 'text', value: "ge", font: 'KARO' }
        ],
        correct: { type: 'text', value: "g", font: 'KARO' },
      },
      {
        question: "Manakah pernyataan yang BENAR mengenai jenis Bindu?",
        options: [
          { type: 'text', value: "Bindu hanya ada satu jenis dan digunakan untuk semua pemisah.", font: 'Umum' },
          { type: 'text', value: "Bindu hanya digunakan untuk menulis angka.", font: 'Umum' },
          { type: 'text', value: "Bindu Matiti (᯹) adalah satu-satunya Bindu yang berfungsi sebagai titik.", font: 'Umum' },
          { type: 'text', value: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda akhir kalimat.", font: 'Umum' }
        ],
        correct: { type: 'text', value: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda akhir kalimat.", font: 'Umum' },
      },
      {
        question: "Manakah pernyataan yang BENAR mengenai jenis **Bindu**?",
        options: [
          { type: 'text', value: "Bindu hanya ada satu jenis dan digunakan untuk semua pemisah.", font: 'Umum' },
          { type: 'text', value: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda akhir kalimat.", font: 'Umum' },
          { type: 'text', value: "Bindu hanya digunakan untuk menulis angka.", font: 'Umum' },
          { type: 'text', value: "Bindu Matiti (᯹) adalah satu-satunya Bindu yang berfungsi sebagai titik.", font: 'Umum' },
        ],
        correct: { type: 'text', value: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda selesainya sebuah teks.", font: 'Umum' },
      },
    ],
  },
  {
    id: 3,
    name: "Gabungan Kata",
    icon: "💬",
    type: "quiz",
    questions: [
      {
        question: "Bagaimana menulis 'Poda' (Artinya: nasihat, ajaran) dalam aksara Batak?",
        options: [
          { type: 'text', value: "pod", font: 'toba' },
          { type: 'text', value: "mod", font: 'toba' },
          { type: 'text', value: "sod", font: 'toba' },
          { type: 'text', value: "mad", font: 'toba' }
        ],
        correct: { type: 'text', value: "pod", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Tano' (Artinya: tanah) dalam aksara Batak?",
        options: [
          { type: 'text', value: "tno", font: 'toba' },
          { type: 'text', value: "tna", font: 'toba' },
          { type: 'text', value: "tnp", font: 'toba' },
          { type: 'text', value: "mad", font: 'toba' }
        ],
        correct: { type: 'text', value: "tno", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Ulu' (Artinya: kepala/sumber mata air) dalam aksara Batak?",
        options: [
          { type: 'text', value: "ulu", font: 'toba' },
          { type: 'text', value: "ala", font: 'toba' },
          { type: 'text', value: "mad", font: 'toba' },
          { type: 'text', value: "tno", font: 'toba' }
        ],
        correct: { type: 'text', value: "ulu", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Horas' (Artinya: salam/selamat) dalam aksara Batak?",
        options: [
          { type: 'text', value: "hrs", font: 'toba' },
          { type: 'text', value: "haa", font: 'toba' },
          { type: 'text', value: "kwn", font: 'toba' },
          { type: 'text', value: "horas", font: 'toba' }
        ],
        correct: { type: 'text', value: "hrs", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Somba' (Artinya: hormat) dalam aksara Batak?",
        options: [
          { type: 'text', value: "sma", font: 'toba' },
          { type: 'text', value: "smb", font: 'toba' },
          { type: 'text', value: "somay", font: 'toba' },
          { type: 'text', value: "sambi", font: 'toba' }
        ],
        correct: { type: 'text', value: "smb", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Tondi' (Artinya: roh) dalam aksara Batak?",
        options: [
          { type: 'text', value: "ton", font: 'toba' },
          { type: 'text', value: "tda", font: 'toba' },
          { type: 'text', value: "tondi", font: 'toba' },
          { type: 'text', value: "mad", font: 'toba' }
        ],
        correct: { type: 'text', value: "tondi", font: 'toba' },
      },
      {
        question: "Bagaimana menulis 'Sihotang' (Artinya: keluarga) dalam aksara Batak?",
        options: [
          { type: 'text', value: "sihto", font: 'toba' },
          { type: 'text', value: "sihtng", font: 'toba' },
          { type: 'text', value: "siho", font: 'toba' },
          { type: 'text', value: "sihtang", font: 'toba' }
        ],
        correct: { type: 'text', value: "sihtng", font: 'toba' },
      },
    ],
  },
]);

const currentQuiz = computed(() => {
  return selectedCategory.value?.questions || [];
});

const currentQuestion = computed(() => {
  return currentQuiz.value[currentQuestionIndex.value];
});

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const selectCategory = (category) => {
  selectedCategory.value = category;
  resetQuiz();
  if (windowWidth.value < 1024) {
    isSidebarOpen.value = false;
  }
};

const startQuiz = () => {
  quizStarted.value = true;
  startTimer();
};

const startTimer = () => {
  timeLeft.value = 120;
  clearInterval(timer.value);
  timer.value = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) {
      clearInterval(timer.value);
      if (!answerSelected.value) {
        nextQuestion();
      }
    }
  }, 1000);
};

const areOptionsEqual = (option1, option2) => {
  if (!option1 || !option2 || option1.type !== option2.type) {
    return false;
  }

  if (option1.type === 'text') {
    return option1.value === option2.value && option1.font === option2.font;
  } else if (option1.type === 'image') {
    return option1.src === option2.src;
  }
  return false; 
};


const selectAnswer = (option, index) => {
  if (answerSelected.value) return;

  answerSelected.value = true;
  selectedAnswerIndex.value = index;
  clearInterval(timer.value);

  if (areOptionsEqual(option, currentQuestion.value.correct)) {
    score.value++;
  }
};

const getOptionClass = (option, index) => {
  if (!answerSelected.value) {
    return "border-gray-300 text-gray-800 hover:border-[var(--primary-red)] hover:bg-blue-50";
  }

  const isOptionCorrect = areOptionsEqual(option, currentQuestion.value.correct);
  const isSelected = selectedAnswerIndex.value === index;

  if (isSelected && isOptionCorrect) {
    return "border-green-500 bg-green-100 text-green-800 bounce-animation";
  } else if (isSelected && !isOptionCorrect) {
    return "border-red-500 bg-red-100 text-red-800 shake-animation";
  } else if (isOptionCorrect) {
    return "border-green-500 bg-green-100 text-green-800";
  } else {
    return "border-gray-300 bg-gray-100 text-gray-500";
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < currentQuiz.value.length - 1) {
    currentQuestionIndex.value++;
    answerSelected.value = false;
    selectedAnswerIndex.value = null;
    startTimer();
  } else {
    quizCompleted.value = true;
    clearInterval(timer.value);
  }
};

const restartQuiz = () => {
  resetQuiz();
  startQuiz();
};

const resetQuiz = () => {
  quizStarted.value = false;
  quizCompleted.value = false;
  currentQuestionIndex.value = 0;
  timeLeft.value = 120; // Waktu default 90 detik
  answerSelected.value = false;
  selectedAnswerIndex.value = null;
  score.value = 0;
  if (timer.value) {
    clearInterval(timer.value);
  }
};

// Lifecycle Hooks
let resizeListener;
onMounted(() => {
  if (windowWidth.value < 1024) {
    isSidebarOpen.value = false;
  } else {
    isSidebarOpen.value = true;
  }

  resizeListener = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value < 1024) {
      isSidebarOpen.value = false;
    } else {
      isSidebarOpen.value = true;
    }
  };
  window.addEventListener('resize', resizeListener);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeListener);
  clearInterval(timer.value);
});
</script>

<style scoped>

/* Animasi */
.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.bounce-animation {
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.shake-animation {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.timer-circle {
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 1s linear;
}

.nav-item:hover {
  transform: translateX(5px);
  transition: transform 0.2s ease;
}

.option-button {
  transition: all 0.3s ease;
}

.option-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>