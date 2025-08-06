<template>
  <InfoSection
    mainTitle="Mengenal Jejak Aksara Batak"
    imageSrc="/src/assets/images/peta.avif"
    imageAlt="Peta Persebaran Aksara Batak"
    imageClasses="object-cover rounded-xl w-full max-w-md xl:max-w-none xl:scale-95"
    imageWidth="600"
    imageHeight="400"
    imageColumnClass="xl:order-2 xl:justify-end"
    heading="Persebaran dan Media Tulis Tradisional"
    :fullDescription="description1"
    :truncatedLength="200"
    contentBoxClass="bg-[var(--primary-red)] text-[var(--primary-white)] xl:w-full xl:max-w-[734px] xl:justify-self-end xl:place-self-end"
    mobileDescriptionButtonClasses="text-[var(--second-white)] font-bold cursor-pointer select-none mt-2"
  />

  <InfoSection
    imageSrc="/src/assets/images/hero.avif"
    imageAlt="SISINGAMANGARAJA XII"
    imageClasses="object-cover bg-red-900 rounded-xl w-full max-w-md md:h-[700px]"
    imageWidth="600"
    imageHeight="800"
    imageColumnClass="md:justify-start"
    heading="Fungsi Sosial dan Kemunduran Penggunaan Aksara"
    :fullDescription="description2"
    :truncatedLength="200"
    contentBoxClass="bg-[var(--primary-red)] text-[var(--primary-white)] xl:max-w-[734px] xl:justify-self-end xl:place-self-center"
    mobileDescriptionButtonClasses="text-[var(--second-white)] font-bold cursor-pointer select-none mt-2"
  />

  <InfoSection
    imageSrc="/src/assets/images/write-aksara.avif"
    imageAlt="Orang menulis aksara Batak"
    imageClasses="object-cover rounded-xl w-full max-w-md md:h-[350px] xl:scale-120"
    imageWidth="600"
    imageHeight="400"
    imageColumnClass="md:justify-end xl:order-last"
    heading="Asal-usul, Struktur dan Nilai Historis"
    :fullDescription="description3"
    :truncatedLength="200"
    contentBoxClass="bg-[var(--second-white)] text-[var(--third-red)] xl:max-w-[734px] xl:justify-self-start xl:place-self-start"
    mobileDescriptionButtonClasses="text-[var(--second-red)] font-bold cursor-pointer select-none mt-2"
  />

  <section class="p-4 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
    <div class="order-1 lg:hidden">
      <BaseTitle tag="h2" baseClasses="font-light text-center lg:text-left text-[18px] sm:text-[20px]">Pustaha <span class="font-bold">Aksara Batak</span></BaseTitle>
    </div>
    <div class="order-3 p-4 lg:order-1">
      <BaseTitle tag="h2" baseClasses="hidden font-light text-center lg:block lg:text-left text-[18px] sm:text-[20px] lg:text-[32px] xl:text-[32px] 2xl:text-[55px]">Pustaha <span class="font-bold">Aksara Batak</span></BaseTitle>
      <BaseText baseClasses="text-justify 2xl:text-[18px]">Pustaha Batak merupakan naskah kuno yang ditulis menggunakan aksara Batak oleh para datu, yaitu orang-orang yang memiliki pengetahuan mendalam dalam bidang adat, pengobatan tradisional, dan ilmu spiritual masyarakat Batak. Naskah ini biasanya ditulis pada kulit kayu pohon alim (Aquilaria malaccensis) yang dipotong dan dilipat seperti harmonika, serta disimpan dalam wadah khusus dari kayu atau tanduk kerbau. Pustaha tidak ditulis untuk konsumsi umum, melainkan sebagai warisan pengetahuan esoterik yang hanya boleh dipelajari oleh keturunan atau murid sang datu. Isinya meliputi berbagai aspek, seperti pengobatan herbal, ilmu perbintangan (astrologi), mantra-mantra pelindung, hingga tata cara ritual yang rumit dan sarat simbol. Berdasarkan penelitian filologis dan antropologis yang dilakukan oleh para peneliti seperti Uli Kozok dan H. N. van der Tuuk, pustaha menjadi bukti bahwa masyarakat Batak telah memiliki sistem pengetahuan tertulis yang mapan jauh sebelum pendidikan formal diperkenalkan oleh kolonial Belanda. Hingga kini, ratusan pustaha Batak masih tersimpan di museum-museum di Eropa dan Indonesia, menjadi artefak penting dalam memahami kosmologi dan kebudayaan Batak pada masa lampau.</BaseText>
    </div>
    <div class="relative order-2 md:place-self-end lg:place-self-center">
      <img :src="Pustaha" alt="Pustaha" class="rounded-xl shadow-xl xl:scale-80" loading="lazy" width="600" height="400">
    </div>
  </section>
</template>

<script setup>
import InfoSection from '../components/organisms/InfoSection.vue';
import BaseTitle from '../components/atoms/BaseTitle.vue';
import BaseText from '../components/atoms/BaseText.vue';
import Pustaha from '../assets/images/pustaha.avif';

// Full descriptions for each section
const description1 = `Awalnya, aksara ini berkembang di daerah Angkola-Mandailing, kemudian menyebar ke wilayah Toba, Simalungun, Pakpak/Dairi, dan akhirnya mencapai wilayah Karo. Setiap wilayah memiliki sedikit perbedaan gaya penulisan yang khas, mencerminkan ragam budaya lokal masing-masing sub-etnis Batak. Di antara semuanya, komunitas Karo dikenal memiliki tradisi menulis yang paling kuat dan bertahan paling lama bahkan setelah masuknya era kolonial. Aksara ini ditulis di berbagai media yang tersedia di lingkungan mereka, seperti kulit kayu pohon daluang, bambu, tulang kerbau, hingga tanduk dan batu. Salah satu media yang sangat khas adalah pustaha, yaitu buku tradisional yang terbuat dari kulit kayu yang dilipat zigzag dan dijilid menggunakan dua papan kayu sebagai sampul. Keberagaman media ini menunjukkan betapa pentingnya aksara Batak dalam kehidupan spiritual, sosial, dan budaya masyarakat Batak masa lampau.`;

const description2 = `Pada masa lalu, aksara ini tidak sekadar menjadi alat tulis biasa, melainkan memiliki peran penting dalam kehidupan masyarakat Batak. Ia digunakan untuk mencatat mantra dalam upacara adat dan ritual, menulis nasihat leluhur, hingga menjadi sarana pribadi untuk mencurahkan isi hati seperti ratapan dan catatan harian. Bahkan, ada juga surat-surat pribadi yang ditemukan dari masa silam, yang menunjukkan tingginya tingkat literasi dalam kalangan tertentu masyarakat Batak. Namun, setelah datangnya misi pendidikan kolonial Belanda pada akhir abad ke-19, penggunaan aksara Batak mulai mengalami penurunan. Aksara Latin diperkenalkan secara masif dalam sistem pendidikan formal, sehingga perlahan-lahan menggantikan fungsi aksara Batak. Meski sempat digunakan dalam beberapa kurikulum sekolah hingga awal abad ke-20, penggunaannya kemudian menjadi terbatas. Kini, aksara Batak lebih banyak dijumpai sebagai elemen dekoratif di monumen, bus, atau logo daerah, serta dalam pelajaran muatan lokal di sekolah-sekolah tertentu di Sumatera Utara.`;

const description3 = `Aksara Batak, atau yang dalam tradisi lokal disebut “Surat”, merupakan warisan tulis yang sangat berharga dari rumpun suku Batak di Sumatera Utara. Sistem tulisan ini diperkirakan berkembang sejak abad ke-18 dan memiliki keterkaitan dengan aksara Kawi yang merupakan turunan dari aksara Brahmi India, yang masuk melalui jalur penyebaran agama dan perdagangan di Nusantara. Dalam struktur dasarnya, aksara Batak terdiri dari 19 huruf induk (disebut ina ni surat) dan beberapa bentuk tambahan yang disebut anak ni surat, yang berfungsi untuk menandai vokal atau bunyi akhir. Tulisan ini bersifat abugida, artinya setiap huruf konsonan memiliki bunyi vokal /a/ bawaan yang dapat diubah dengan tanda tertentu. Aksara Batak biasa ditemukan pada naskah-naskah kuno seperti pustaha, yang berisi ilmu pengobatan tradisional, astrologi, ramalan, hingga silsilah keluarga. Saat ini, aksara Batak diakui sebagai bagian dari kekayaan budaya takbenda Indonesia dan telah didaftarkan dalam Unicode sejak 2010 sebagai upaya pelestarian warisan leluhur secara digital dan global.`;
</script>