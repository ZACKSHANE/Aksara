<template>
  <div class="min-h-screen bg-[var(--primary-white)] py-8 sm:py-12">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

      <!-- Tanda Bunuh -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <div class="bg-[var(--primary-red)] p-3 rounded-lg mr-4">
                <span class="text-2xl">♦</span>
              </div>
              <h2 class="text-2xl font-bold">
                Tanda Bunuh (-)
              </h2>
            </div>

            <div class="prose prose-gray max-w-none mb-8">
              <p class="text-gray-700 leading-relaxed">
                <span class="font-semibold">Tanda Bunuh (-)</span> dalam aksara Batak adalah tanda diakritik (tanda tambahan) yang digunakan untuk menghilangkan vokal “a” dari huruf dasar (induk huruf). Dalam aksara Batak, setiap huruf dasar secara otomatis mengandung vokal “a”, dan tanda bunuh digunakan untuk membuat huruf tersebut menjadi konsonan murni tanpa vokal.
              </p>
            </div>

            <!-- Syarat Penggunaan -->
            <div class="bg-[var(--primary-red)] rounded-lg p-6 mb-8">
              <h3 class="text-xl font-semibold mb-4 text-[var(--primary-white)]">
                Contoh :
              </h3>
              <ul class="space-y-3 text-[var(--primary-white)]">
                <li class="flex items-start">
                  1. <span class="font-[toba]">ta</span> = ta
                </li>
                <li class="flex items-start">
                  2. <span class="font-[toba]">t</span> = t (tanpa vokal)
                </li>
                <li class="flex items-start">
                  3. <span class="font-[toba]">na</span> = na
                </li>
                <li class="flex items-start">
                  4. <span class="font-[toba]">n</span> = n (tanpa vokal)
                </li>
              </ul>
            </div>

            <!-- Contoh dan Gambar -->
            <div class="grid lg:grid-cols-1 gap-8 items-start">
                <div>
                  <p class="text-gray-700 leading-relaxed">Gambar di bawah adalah contoh tanda bunuh (-), tanda bunuh disimbolkan dengan garis horizontal yang diletakkan di atas huruf dasar, seperti pada gambar dalam aksara Batak. Tanda ini digunakan untuk menghilangkan vokal "a" dari huruf dasar, yang awalnya "ma" menjadi "m", sehingga huruf tersebut menjadi konsonan murni tanpa vokal.</p>
                </div>

              
              <div class="lg:pl-8">
                <BaseImage/>
                <img 
                  :src="tandaSrc" 
                  alt="Tanda bunuh aksara Batak" 
                  class="w-full max-w-sm mx-auto rounded-lg shadow-md border border-gray-200"
                >
                <p class="text-gray-600 text-sm mt-4 text-center">
                  Tanda Bunuh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Perulangan Aksara Section -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <div class="bg-[var(--primary-red)] p-3 rounded-lg mr-4">
                <span class="text-2xl">♦</span>
              </div>
              <h2 class="text-2xl font-bold">
                Perulangan Aksara (♦)
              </h2>
            </div>

            <div class="prose prose-gray max-w-none mb-8">
              <p class="text-gray-700 leading-relaxed">
                <span class="font-semibold">Perulangan (♦)</span> dalam aksara Batak adalah tanda khusus untuk mengulang suku kata sebelumnya tanpa menulis ulang huruf dan vokalnya. Tanda ini disebut tanda pengulangan dan merupakan bagian dari simbol baca dalam aksara Batak tradisional.
              </p>
              <p class="text-gray-700 leading-relaxed mt-4">
                Contoh: untuk menulis kata "baba", cukup tulis "ba + ♦", lebih ringkas dan efisien. Namun, tidak semua huruf bisa menggunakan tanda ini—hanya berlaku jika suku kata sebelumnya sama persis (konsonan dan vokalnya).
              </p>
            </div>

            <!-- Syarat Penggunaan -->
            <div class="bg-[var(--primary-red)] rounded-lg p-6 mb-8">
              <h3 class="text-xl font-semibold mb-4 text-[var(--primary-white)]">
                Syarat Penggunaan Simbol Perulangan
              </h3>
              <ul class="space-y-3 text-[var(--primary-white)]">
                <li class="flex items-start">
                  1. Simbol perulangan hanya berlaku untuk suku kata sebelumnya sama persis (konsonan dan vokalnya)
                </li>
                <li class="flex items-start">
                  2. Digunakan pada jenis aksara tertentu, terutama dalam Batak Toba dan Mandailing
                </li>
                <li class="flex items-start">
                  3. Jika "ba" diulang dengan vokal dan konsonan yang sama, maka bisa pakai tanda perulangan, tapi jika berbeda (misalnya "ba" diulang dengan "na") maka tidak bisa menggunakan tanda perulangan
                </li>
              </ul>
            </div>

            <!-- Contoh dan Gambar -->
            <div class="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 class="text-lg font-semibold mb-4">Contoh Penggunaan:</h4>
                <div class="bg-[var(--second-white)] rounded-lg p-6">
                  <div class="space-y-3 text-xl">
                    <div class="flex items-center justify-between border-b border-gray-400 pb-2">
                      <span class="font-toba">na</span>
                      <span class="mx-4">=</span>
                      <span>na</span>
                    </div>
                    <div class="flex items-center justify-between border-b border-gray-400 pb-2">
                      <span class="font-toba">na ♦</span>
                      <span class="mx-4">=</span>
                      <span>nana</span>
                    </div>
                    <div class="flex items-center justify-between border-b border-gray-400 pb-2">
                      <span class="font-toba">ba</span>
                      <span class="mx-4">=</span>
                      <span>ba</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="font-toba">ba ♦</span>
                      <span class=" mx-4">=</span>
                      <span>baba</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="lg:pl-8">
                <BaseImage/>
                <img 
                  :src="ba" 
                  alt="Contoh tanda perulangan aksara Batak" 
                  class="w-full max-w-sm mx-auto rounded-lg shadow-md border border-gray-200"
                >
                <p class="text-gray-600 text-sm mt-4 text-center lg:text-left">
                  Contoh penggunaan tanda perulangan (♦) dalam aksara Batak. Tanda ini digunakan untuk perulangan pada huruf dasar "ma" menjadi "mama".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Anuswara Section -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <div class="bg-[var(--primary-white)] p-3 rounded-lg mr-4">
                <span class="text-2xl">Ω</span>
              </div>
              <h2 class="text-2xl font-bold">
                Tanda Anuswara / Nasalisasi
              </h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div class="prose prose-gray max-w-none">
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-semibold">Anuswara</span> adalah tanda khusus dalam aksara Batak yang digunakan untuk menandai bunyi nasal /ng/ di akhir suku kata. Bunyi /ng/ muncul di akhir suku kata, contoh: bang, pung, tang.
                  </p>
                  <p class="text-gray-700 leading-relaxed mt-4">
                    Umumnya digunakan di varian aksara Batak Mandailing dan Angkola.
                  </p>
                </div>

                <div class="bg-[var(--primary-red)] text-[var(--primary-white)] rounded-lg p-6 mt-6">
                  <h4 class="font-semibold mb-3">Karakteristik:</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      1. Disimbolkan dengan tanda seperti omega (Ω)
                    </li>
                    <li class="flex items-start">
                      2. Diletakkan di atas huruf dasar
                    </li>
                    <li class="flex items-start">
                      3. Khusus untuk varian Angkola dan Mandailing
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <BaseImage/>
                <img 
                  :src="anuswara" 
                  alt="Contoh tanda anuswara aksara Batak" 
                  class="w-full max-w-sm mx-auto rounded-lg shadow-md border border-gray-200"
                >
                <p class="text-gray-600 text-sm mt-4 text-center">
                  Contoh penggunaan tanda anuswara/nasalisasi (Ω). Tanda ini mengubah "ma" menjadi "mang" dengan menambahkan bunyi nasal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Varian Daerah Section -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="flex items-center mb-6">
              <h2 class="text-2xl font-bold">
                Varian Daerah / Marga
              </h2>
            </div>

            <p class="text-gray-700 leading-relaxed mb-6">
              Aksara Batak memiliki beberapa varian bentuk yang berbeda tergantung pada daerah atau marga. Setiap varian memiliki karakteristik dan keunikan tersendiri.
            </p>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div class="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                <h4 class="font-semibold text-red-900">Batak Toba</h4>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-900">Karo</h4>
              </div>
              <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-semibold text-yellow-900">Mandailing</h4>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-900">Angkola</h4>
              </div>
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                <h4 class="font-semibold text-purple-900">Simalungun</h4>
              </div>
            </div>

            <div class="bg-[var(--primary-red)] rounded-lg p-6">
              <p class="text-[var(--primary-white)]">
                Untuk mempelajari lebih detail tentang perbedaan masing-masing varian, Anda dapat mengklik <span class="font-semibold text-[var(--third-red)]">"Card"</span> pada ikon yang ada di bagian atas halaman belajar aksara.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-[var(--second-red)] to-[var(--primary-red)] rounded-xl p-8 text-[var(--primary-white)] shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Siap untuk Berlatih?</h3>
          <p class="mb-6 max-w-2xl mx-auto">
            Setelah memahami materi yang ada di halaman ini, saatnya mengasah kemampuan kamu dengan latihan soal.
          </p>
          <RouterLink to="/latihan" class="bg-white text-[var(--primary-red)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-md transform hover:scale-105">
            Mulai Latihan</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseImage from '../atoms/BaseImage.vue';

import tandaSrc from '../../assets/images/tanda-bunuh.avif';
import ba from '../../assets/images/ba.avif'
import anuswara from '../../assets/images/anuswara.avif'
</script>