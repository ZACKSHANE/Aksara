<template>
  <div class="min-h-screen bg-[var(--primary-white)] py-8 sm:py-12">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Belajar Aksara Batak
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sistem penulisan tradisional yang berasal dari aksara Brahmi, digunakan oleh berbagai kelompok etnis Batak dengan prinsip abugida yang unik
        </p>
      </div>

      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <h2 class="text-2xl font-bold text-gray-900">
                Gambaran Umum Aksara Batak
              </h2>
            </div>

            <div class="prose prose-gray max-w-none">
              <p class="text-gray-700 leading-relaxed mb-4">
                <span class="font-semibold">Aksara Batak</span> atau <span class="font-semibold">Surat Batak</span> adalah salah satu dari sekian banyak aksara tradisional di Indonesia yang berasal dari aksara Brahmi. Aksara ini bersifat <span class="font-semibold text-indigo-600">abugida</span>, artinya setiap konsonan memiliki vokal inheren (biasanya /a/) dan perubahan vokal ditunjukkan dengan penambahan diakritik.
              </p>
              
              <div class="bg-[var(--primary-red)] rounded-lg p-6 mt-6">
                <h3 class="text-lg font-semibold text-[var(--primary-white)] mb-3">Karakteristik Sistem Abugida:</h3>
                <ul class="space-y-2 text-[var(--primary-white)]">
                  <li class="flex items-start">
                    1. Setiap konsonan memiliki vokal inheren /a/
                  </li>
                  <li class="flex items-start">
                    2. Perubahan vokal menggunakan diakritik (Anak Ni Surat)
                  </li>
                  <li class="flex items-start">
                    3. Berbeda dari alfabet (vokal terpisah) atau abjad (hanya konsonan)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <h2 class="text-2xl font-bold">
                Kelompok Etnis Batak
              </h2>
            </div>

            <p class="leading-relaxed mb-8">
              Meskipun ada perbedaan minor antar varian, struktur dasar dan prinsip pembacaannya serupa. Materi pembelajaran akan fokus pada <span class="font-semibold">Aksara Batak Toba</span> karena paling umum dan dasarnya sama dengan varian lainnya.
            </p>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div 
                v-for="group in ethnicGroups" 
                :key="group.name"
                :class="'bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border transition-transform duration-200 hover:scale-[1.02]'">
                <h3 :class="['text-lg font-semibold mb-2', group.text]">
                  {{ group.name }}
                </h3>
                <p :class="['text-sm opacity-80', group.text]">
                  {{ group.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <h2 class="text-2xl font-bold text-gray-900">
                Jenis Huruf Aksara Batak
              </h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
              <!-- Ina Ni Surat -->
              <div class="bg-[var(--second-white)] rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">
                  Ina Ni Surat (Huruf Induk)
                </h3>
                <p class="mb-4">
                  Huruf utama yang mewakili konsonan dengan vokal inheren /a/
                </p>
                
                <div class="grid grid-cols-2 gap-3">
                  <div 
                    v-for="char in batakCharacters" 
                    :key="char.char"
                    class="bg-white rounded-lg p-4 text-center border border-red-300"
                  >
                    <div class="text-3xl mb-2  font-[toba]">{{ char.char }}</div>
                    <div class="text-sm font-medium ">{{ char.sound }}</div>
                  </div>
                </div>
              </div>

              <!-- Anak Ni Surat -->
              <div class="bg-[var(--second-white)] rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">
                  Anak Ni Surat (Diakritik)
                </h3>
                <p class="mb-4">
                  Tanda-tanda untuk mengubah vokal inheren atau memberikan fungsi gramatikal
                </p>
                
                <div class="space-y-3">
                  <div 
                    v-for="mark in diacritics" 
                    :key="mark.char"
                    class="bg-white rounded-lg p-4 border border-blue-200"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                      <img :src="mark.image" alt="Diakritik" class="w-10 h-10 mr-3" />

                        <div>
                          <div class="font-medium text-blue-900">{{ mark.name }}</div>
                          <div class="text-sm text-blue-700">{{ mark.function }}</div>
                        </div>
                      </div>
                      <span class="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {{ mark.position }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <h2 class="text-2xl font-bold">
                Prinsip Dasar Membaca Aksara Batak
              </h2>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Aturan Pembacaan:</h3>
                <div class="space-y-4">
                  <div class="bg-[var(--primary-red)] rounded-lg p-4 text-[var(--primary-white)]">
                    <h4 class="font-semibold mb-2">1. Vokal Inheren</h4>
                    <p class="text-sm">Setiap konsonan dasar memiliki vokal /a/</p>
                    <div class="mt-2 text-xl font-mono">"ba"</div>
                  </div>
                  
                  <div class="bg-[var(--primary-red)] rounded-lg p-4">
                    <h4 class="font-semibold text-[var(--primary-white)] mb-2">2. Perubahan Vokal</h4>
                    <p class="text-[var(--primary-white)] text-sm">Diakritik mengubah vokal inheren</p>
                    <div class="mt-2 space-y-1">
                      <div class="text-xl text-[var(--primary-white)] font-mono">"bi"</div>
                      <div class="text-xl text-[var(--primary-white)] font-mono">"bu"</div>
                    </div>
                  </div>
                  
                  <div class="bg-[var(--primary-red)] rounded-lg p-4">
                    <h4 class="font-semibold text-[var(--primary-white)] mb-2">3. Konsonan Mati</h4>
                    <p class="text-[var(--primary-white)] text-sm">Pangolat menghilangkan vokal</p>
                    <div class="mt-2 text-xl font-mono text-[var(--primary-white)]">"b"</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-4">Contoh Pembacaan:</h3>
                <div class="space-y-3">
                  <div 
                    v-for="example in readingExamples" 
                    :key="example.batak"
                    class="bg-[var(--second-white)] rounded-lg p-4 border border-gray-400"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-2xl font-[toba]">{{ example.batak }}</span>
                      <span class="text-lg font-semibold">{{ example.latin }}</span>
                    </div>
                    <div class="text-sm text-gray-600">{{ example.breakdown }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const batakCharacters = ref([
  { char: 'b', sound: 'ba', type: 'Ina Ni Surat' },
  { char: 'm', sound: 'ma', type: 'Ina Ni Surat' },
  { char: 's', sound: 'sa', type: 'Ina Ni Surat' },
  { char: 'd', sound: 'da', type: 'Ina Ni Surat' }
])

const diacritics = ref([
  {
    char: 'ᯪ',
    name: 'Panulus',
    function: 'Vokal /i/',
    position: 'di atas',
    image: new URL('@/assets/images/panulus4.avif', import.meta.url).href
  },
  {
    char: 'ᯮ',
    name: 'Panonggial',
    function: 'Vokal /u/',
    position: 'di bawah huruf',
    image: new URL('@/assets/images/pa1.avif', import.meta.url).href
  },
  {
    char: '᯲',
    name: 'Pangolat',
    function: 'Konsonan mati',
    position: 'di bawah',
    image: new URL('@/assets/images/pe1.avif', import.meta.url).href
  },
  {
    char: 'ᯱ',
    name: 'Pangulut',
    function: 'Konsonan rangkap',
    position: 'setelah huruf',
    image: new URL('@/assets/images/pu1.avif', import.meta.url).href
  }
])

const ethnicGroups = ref([
  { name: 'Batak Toba', description: 'Varian yang paling umum dan banyak dipelajari',text: 'text-red-900' },
  { name: 'Batak Karo', description: 'Memiliki perbedaan dalam bentuk huruf dan diakritik',text: 'text-blue-900' },
  { name: 'Batak Simalungun', description: 'Memiliki kekhasan tersendiri dalam penulisan',text: 'text-green-900' },
  { name: 'Batak Pakpak', description: 'Kemiripan dengan Toba dan Karo',text: 'text-yellow-900' },
  { name: 'Batak Mandailing/Angkola', description: 'Menunjukkan pengaruh Islam dalam konteks sejarah',text: 'text-purple-900' }
])

const readingExamples = ref([
  { batak: 'bb', latin: 'baba', breakdown: 'ba + ba' },
  { batak: 'bibu', latin: 'bibu', breakdown: 'bi + bu' },
  { batak: 'md', latin: 'mada', breakdown: 'ma + da' },
  { batak: 'sd', latin: 'sada', breakdown: 'sa + da' }
])
</script>

<style scoped>
.font-mono {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", monospace;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
</style>