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
    <div class="relative h-full">
      <!-- Tombol Toggle -->
      <button
        @click="toggleSidebar"
        class="absolute top-4 right-4 text-white text-2xl z-50"
      >
        <span v-if="isSidebarOpen">✕</span>
        <span v-else>☰</span>
      </button>

      <!-- Isi Sidebar -->
      <div
        :class="{
          'opacity-0 pointer-events-none': !isSidebarOpen && windowWidth < 1280
        }"
        class="transition-opacity duration-300 delay-100 p-4"
      >
        <h1
          class="text-2xl font-bold text-[var(--primary-white)] mb-8"
          :class="{ 'hidden': !isSidebarOpen && windowWidth < 1280 }"
        >
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
                : 'hover:bg-[var(--third-red)]'
            ]"
          >
            <span class="text-2xl mr-3">{{ category.icon }}</span>
            <span
              class="text-[var(--primary-white)] font-medium whitespace-nowrap overflow-hidden transition-all duration-150 ease-in-out"
              :class="{
                'w-0 opacity-0 ml-0':
                  !isSidebarOpen && windowWidth < 1280,
                'w-auto opacity-100 ml-3':
                  isSidebarOpen || windowWidth >= 1280
              }"
            >
              {{ category.name }}
            </span>
          </div>
        </nav>
        <div class="absolute bottom-4 left-0 right-0 px-4 text-white" >
          <button @click="$router.push({ name: 'Home' })">⬅ Kembali ke Home</button>
</div>
      </div>
      
    </div>
  </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 overflow-y-auto">
      <div v-if="!selectedCategory" class="text-center py-20">
        <div class="slide-in xl:text-xl flex flex-col justify-center items-center">
          <h2 class="text-xl xl:text-4xl font-bold mb-4">Selamat Datang!</h2>
          <p class="w-60 xl:w-[50%] max-w-lg mx-auto">Pastikan kamu sudah membaca materi mengenai Aksara Batak yang ada di website ini ya. Pilih kategori latihan soal dari menu sebelah kiri</p>
          <div class="mt-8 text-6xl">📚</div>
        </div>
      </div>

      <!-- Quiz Content -->
      <div v-else-if="selectedCategory?.type === 'quiz'" class="fade-in">
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-bold text-primary-black pl-5">{{ selectedCategory.name }}</h2>
            <div v-if="quizStarted && !quizCompleted" class="flex items-center space-x-4">
              <div class="relative w-16 h-16">
                <svg class="w-16 h-16 transform -rotate-90">
                  <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="4" fill="transparent" class="text-gray-200"/>
                  <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="4" fill="transparent"
                    :stroke-dashoffset="283 - (283 * timeLeft) / 30" class="timer-circle text-[var(--primary-red)]"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-lg font-bold">{{ timeLeft }}</span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500">Soal</div>
                <div class="text-lg font-bold">{{ currentQuestionIndex + 1 }}/{{ currentQuiz.length }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Show Questions -->
        <div v-if="!quizStarted" class="text-center py-12 ">
          <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div class="text-6xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold text-primary-black mb-4">Siap Memulai?</h3>
            <p class="text-gray-600 mb-6">{{ currentQuiz.length }} soal menunggu Anda!</p>
            <button @click="startQuiz" class="bg-[var(--primary-red)] text-[var(--primary-white)] px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-200 transform hover:scale-105">
              Mulai Latihan
            </button>
          </div>
        </div>

        <div v-else-if="!quizCompleted" class="fade-in">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-primary-black mb-4" v-html="currentQuestion.question"></h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button v-for="(option, index) in currentQuestion.options" :key="index" @click="selectAnswer(option, index)"
                :disabled="answerSelected" :class="['option-button p-4 rounded-lg text-left font-medium border-2 transition-all duration-300', getOptionClass(option, index)]">
                <span class="font-bold mr-2">{{ String.fromCharCode(65 + index) }}.</span>
               <img v-if="option.image" :src="option.image" :alt="'Option ' + index" class="w-full h-24 object-contain" />

<!-- Jika tidak ada gambar, tampilkan teks seperti biasa -->
<span v-else :style="{ fontFamily: option.font }">{{ option.text }}</span> <!-- Apply font directly -->
              </button>
            </div>

            <div v-if="answerSelected" class="mt-6 text-center">
              <button @click="nextQuestion" class="bg-[var(--primary-red)] text-[var(--primary-white)] px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-all duration-200">
                {{ currentQuestionIndex < currentQuiz.length - 1 ? 'Soal Berikutnya' : 'Selesai' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Show Completion -->
        <div v-else class="text-center py-12">
          <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto bounce-animation">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold text-primary-black mb-4">Latihan Selesai!</h3>
            <div class="text-3xl font-bold text-primary-red mb-4">{{ score }}/{{ currentQuiz.length }}</div>
            <p class="text-gray-600 mb-6">Skor: {{ Math.round((score / currentQuiz.length) * 100) }}%</p>
            <button @click="restartQuiz" class="bg-[var(--primary-red)] text-[var(--primary-white)] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-200">
              Ulangi Latihan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import mbaImg from '@/assets/images/mba.webp'
import ndaImg from '@/assets/images/nda.avif'
import ngaImg from '@/assets/images/bgnga.png'
import nyaImg from '@/assets/images/nya.avif'
import { ref, computed, onMounted, onUnmounted } from 'vue';



const isSidebarOpen = ref(true);
const windowWidth = ref(window.innerWidth);
const selectedCategory = ref(null);
const quizStarted = ref(false);
const quizCompleted = ref(false);
const currentQuestionIndex = ref(0);
const timeLeft = ref(30);
const timer = ref(null);
const answerSelected = ref(false);
const selectedAnswerIndex = ref(null);
const score = ref(0);
const restartQuiz = () => {
  resetQuiz();
  startQuiz();
};

// Fungsi toggle sidebar (☰ / ✕)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Responsif terhadap perubahan ukuran jendela
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Soal untuk kategori "Huruf Aksara"
const categories = ref([
  {
    id: 1,
    name: "Huruf Aksara",
    icon: "🔢",
    type: "quiz",
    questions: [
      {
        question: "Manakah huruf aksara Batak Toba 'ka'?",
        options: [
          { text: "k", font: "toba" },
          { text: "k", font: "karo" },
          { text: "k", font: "mandailing" },
          { text: "k", font: "pakpak" },
        ],
        correct: "toba",
      },
      {
        question: "manakah huruf aksara Batak Karo 'ta'?",
        options: [
          { text: "m", font: "toba" },
          { text: "t", font: "karo" },
          { text: "p", font: "mandailing" },
          { text: "d", font: "pakpak" },
        ],
        correct: "karo",
      },
      {
        question: "Huruf 'sa' dalam aksara Batak Angkola ",
        options: [
          { text: "s", font: "toba" },
          { text: "s", font: "karo" },
          { text: "s", font: "mandailing" },
          { text: "s", font: "pakpak" },
        ],
        correct: "mandailing",
      },
      {
        question: "Manakah huruf aksara Batak 'ma'? ",
        options: [
          { text: "m", font: "toba" },
          { text: "n", font: "karo" },
          { text: "s", font: "mandailing" },
          { text: "b", font: "pakpak" },
        ],
        correct: "toba",
      },
        {
        question: "huruf 'nya'dalam aksara Batak  ",
        options: [
      { image: mbaImg, label: 'mba' },
    { image: ndaImg, label: 'nda' },
    { image: ngaImg, label: 'nga' },
    { image: nyaImg, label: 'nya' },
  ],
  correct: 'nya'
},
      {
        question: "Manakah huruf aksara Batak Simalungun 'ra'? ",
        options: [
          { text: "r", font: "toba" },
          { text: "r", font: "karo" },
          { text: "r", font: "simalungun" },
          { text: "r", font: "pakpak" },
        ],
        correct: "simalungun",
      },
      {
        question: "Aksara ini <span class='font-[toba] text-3xl'>l</span> dibaca apa?",
        options: [
          { text: "la", font: "" },
          { text: "wa", font: "" },
          { text: "ha", font: "" },
          { text: "ba", font: "" },
        ],
        correct: "la",
      },
      {
        question: "huruf 'nga'dalam aksara Batak  ",
        options: [
      { image: mbaImg, label: 'mba' },
    { image: ndaImg, label: 'nda' },
    { image: ngaImg, label: 'nga' },
    { image: nyaImg, label: 'nya' },
  ],
  correct: 'nga'
},
      {
        question: "Manakah huruf aksara Batak 'da'? ",
        options: [
          { text: "r", font: "toba" },
          { text: "m", font: "karo" },
          { text: "s", font: "mandailing" },
          { text: "d", font: "pakpak" },
        ],
        correct: "pakpak",
      },
      {
        question: "Huruf 'ca' dalam aksara Batak Pakpak ",
        options: [
          { text: "c", font: "mandailing" },
          { text: "c", font: "karo" },
          { text: "c", font: "mandailing" },
          { text: "c", font: "pakpak" },
        ],
        correct: "pakpak",
      },
      {
        question: "Aksara ini <span class='font-[toba] text-3xl'>m</span> dibaca apa?",
        options: [
          { text: "ma", font: "" },
          { text: "na", font: "" },
          { text: "ra", font: "" },
          { text: "ba", font: "" },
        ],
        correct: "ma",
      },
         {
        question: "huruf 'mba'dalam aksara Batak  ",
        options: [
      { image: mbaImg, label: 'mba' },
    { image: ndaImg, label: 'nda' },
    { image: ngaImg, label: 'nga' },
    { image: nyaImg, label: 'nya' },
  ],
  correct: 'mba'
},
      {
        question: "Manakah huruf aksara Batak 'ba'? ",
        options: [
          { text: "m", font: "toba" },
          { text: "n", font: "karo" },
          { text: "b", font: "mandailing" },
          { text: "h", font: "pakpak" },
        ],
        correct: "mandailing",
      },
      {
        question: "huruf 'pa'dalam aksara Batak simalungun ",
        options: [
          { text: "p", font: "toba" },
          { text: "p", font: "karo" },
          { text: "p", font: "simalungun" },
          { text: "p", font: "pakpak" },
        ],
        correct: "simalungun",
      },
      {
        question: "huruf 'wa'dalam aksara Batak toba ",
        options: [
          { text: "w", font: "toba" },
          { text: "w", font: "karo" },
          { text: "w", font: "simalungun" },
          { text: "w", font: "pakpak" },
        ],
        correct: "simalungun",
      },
      {
        question: "huruf 'nda'dalam aksara Batak toba ",
        options: [
      { image: mbaImg, label: 'mba' },
    { image: ndaImg, label: 'nda' },
    { image: ngaImg, label: 'nga' },
    { image: nyaImg, label: 'nya' },
  ],
  correct: 'nda'
}
     
      
    ]
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
      { text: "Mengubah vokal inheren menjadi 'i'" },
      { text: "Menjadikan konsonan mati" },
      { text: "Menggandakan konsonan" },
      { text: "Menandai akhir kalimat" }
    ],
    correct: "Menjadikan konsonan mati"
  },
  {
    question: "Di manakah posisi umum Panulus  diletakkan relatif terhadap Ina Ni Surat?",
    options: [
      { text: "Di bawah Ina Ni Surat" },
      { text: "Di samping kanan Ina Ni Surat" },
      { text: "Di atas Ina Ni Surat" },
      { text: "Di awal kata" }
    ],
    correct: "Di atas Ina Ni Surat"
  },
  {
    question: "Bagaimana cara menulis Ina Ni Surat 'pa'  agar menjadi bunyi 'pu'?",
    options: [
      { text: "diberikan tanda panulus" },
      { text: "diberikan tanda pangolat" },
      { text: "diberikan tanda panonggial" },
      { text: "diberikan tanda pangulut" }
    ],
    correct: "diberikan tanda panonggial"
  },
  {
    question: "Jika Anda ingin menulis konsonan 't' tanpa vokal, diakritik apa yang harus ditambahkan pada Ina Ni Surat 'ta' ?",
    options: [
      { text: "Panulus " },
      { text: "Panonggial " },
      { text: "Pangolat " },
      { text: "Pangulut " }
    ],
    correct: "Pangolat "
  },
  {
    question: "Apa perbedaan fungsi antara Bindu Pinarboras  dan Tanda Akhir ",
    options: [
      { text: "Bindu Pinarboras untuk huruf kapital, Tanda Akhir untuk huruf kecil." },
      { text: "Bindu Pinarboras untuk nama orang, Tanda Akhir untuk tempat." },
      { text: "Bindu Pinarboras sebagai pemisah frasa/klausa, Tanda Akhir sebagai penanda selesainya sebuah teks." },
      { text: "Bindu Pinarboras untuk awal paragraf, Tanda Akhir untuk akhir paragraf." }
    ],
    correct: "Bindu Pinarboras sebagai pemisah frasa/klausa, Tanda Akhir sebagai penanda selesainya sebuah teks."
  },
  {
    question: "Bagaimana bunyi Ina Ni Surat 'na' jika ditambahkan Panonggial ?",
    options: [
      { text: "Ni" },
      { text: "Nu" },
      { text: "Ne" },
      { text: "No" }
    ],
    correct: "Nu"
  },
  {
    question: "Tanda baca apa yang digunakan untuk menggandakan konsonan (membuat konsonan rangkap) dalam beberapa varian Aksara Batak?",
    options: [
      { text: "Bindu" },
      { text: "Pangolat" },
      { text: "Pangulut" },
      { text: "Panulus" }
    ],
    correct: "Pangulut"
  },
  {
    question: "Bagaimana Anda akan menuliskan Ina Ni Surat 'ga' jika vokal inherennya dihilangkan?",
    options: [
      { text: "ga" },
      { text: "g" },
      { text: "gi" },
      { text: "gu" }
    ],
    correct: "g"
  },
  {
    question: "Manakah pernyataan yang BENAR mengenai jenis Bindu?",
    options: [
      { text: "Bindu hanya ada satu jenis dan digunakan untuk semua pemisah." },
      { text: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda akhir kalimat." },
      { text: "Bindu hanya digunakan untuk menulis angka." },
      { text: "Bindu Matiti (᯹) adalah satu-satunya Bindu yang berfungsi sebagai titik." }
    ],
    correct: "Bindu Pinarboras (᯶) sering digunakan sebagai pemisah antar kata/klausa, dan Bindu Nasumurung (᯸) sebagai penanda akhir kalimat."
  }
      
    ]
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
      { text: "pod", font: "toba" },
      { text: "mod", font: "toba" },
      { text: "pid", font: "toba" },
      { text: "pad", font: "toba" }
    ],
    correct: "pod"
  },
  {
    question: "Bagaimana menulis 'Tano' (Artinya: tanah) dalam aksara Batak?",
    options: [
      { text: "tno", font: "toba" },
      { text: "tni", font: "toba" },
      { text: "tnp", font: "toba" },
      { text: "tn", font: "toba" }
    ],
    correct: "tno"
  },
  {
    question: "Bagaimana menulis 'Ulu' (Artinya: kepala/sumber mata air) dalam aksara Batak?",
    options: [
      { text: "ulu", font: "toba" },
      { text: "ul", font: "toba" },
      { text: "md", font: "toba" },
      { text: "pu", font: "toba" }
    ],
    correct: "ulu"
  },
  {
    question: "Bagaimana menulis 'Horas' (Artinya: salam/selamat) dalam aksara Batak?",
    options: [
      { text: "hrs", font: "toba" },
      { text: "horas", font: "toba" },
      { text: "kwn", font: "toba" },
      { text: "hoss", font: "toba" }
    ],
    correct: "hrs"
  },
  {
    question: "Bagaimana menulis 'Somba' (Artinya: hormat) dalam aksara Batak?",
    options: [
      { text: "smb", font: "toba" },
      { text: "smbh", font: "toba" },
      { text: "smbn", font: "toba" },
      { text: "smbi", font: "toba" }
    ],
    correct: "smb"
  },
  {
    question: "Bagaimana menulis 'Tondi' (Artinya: roh) dalam aksara Batak?",
    options: [
      { text: "tondi", font: "toba" },
      { text: "tond", font: "toba" },
      { text: "ton", font: "toba" },
      { text: "toni", font: "toba" }
    ],
    correct: "tondi"
  },
  {
    question: "Bagaimana menulis 'Sihotang' (Artinya: keluarga) dalam aksara Batak?",
    options: [
      { text: "sihtng", font: "toba" },
      { text: "sihtang", font: "toba" },
      { text: "sihtngn", font: "toba" },
      { text: "sihtangn", font: "toba" }
    ],
    correct: "sihtng"
  },
  ],
}

]);

const currentQuiz = computed(() => {
  return selectedCategory.value?.questions || [];
});

const currentQuestion = computed(() => currentQuiz.value[currentQuestionIndex.value]);

// Memilih kategori soal
const selectCategory = (category) => {
  selectedCategory.value = category;
  resetQuiz();
  if (windowWidth.value < 1024) {
    isSidebarOpen.value = false;
  }
};

// Timer untuk soal
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

// Memulai soal quiz
const startQuiz = () => {
  quizStarted.value = true;
  startTimer();

  // Tambahkan baris ini untuk menutup sidebar otomatis saat latihan dimulai
  if (windowWidth.value < 1280) {
    isSidebarOpen.value = false;
  }
};



// Menilai jawaban yang dipilih
const selectAnswer = (option, index) => {
  if (answerSelected.value) return;
  answerSelected.value = true;
  selectedAnswerIndex.value = index;

  const correct = currentQuestion.value.correct;

  if (
    option.text === correct ||
    option.font === correct ||
    option.label === correct
  ) {
    score.value++;
  }
};



// Menampilkan kelas untuk opsi
const getOptionClass = (option, index) => {
  if (!answerSelected.value) return '';

  const correct = currentQuestion.value.correct;
  const isCorrect =
    option.text === correct ||
    option.font === correct ||
    option.label === correct;

  if (index === selectedAnswerIndex.value) {
    return isCorrect
      ? 'bg-green-500 text-white animate-pulse'
      : 'bg-red-500 text-white shake';
  }

  if (isCorrect) {
    return 'bg-green-500 text-white animate-pulse';
  }

  return '';
};



// Melanjutkan ke soal berikutnya
const nextQuestion = () => {
  if (currentQuestionIndex.value < currentQuiz.value.length - 1) {
    currentQuestionIndex.value++;
    answerSelected.value = false;
  } else {
    quizCompleted.value = true;
    clearInterval(timer.value);
  }
};

// Mereset quiz
const resetQuiz = () => {
  quizStarted.value = false;
  quizCompleted.value = false;
  currentQuestionIndex.value = 0;
  timeLeft.value = 30;
  answerSelected.value = false;
  selectedAnswerIndex.value = null;
  score.value = 0;
  if (timer.value) {
    clearInterval(timer.value);
  }
};
</script>


<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

.shake {
  animation: shake 0.4s ease-in-out;
}
</style>

