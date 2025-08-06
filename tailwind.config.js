// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'batak-karo': ['KARO', 'serif'],
        'batak-toba': ['toba', 'serif'],
        'batak-pakpak': ['pakpak', 'serif'],
        'batak-simalungun': ['simalung', 'serif'],
        'batak-mandailing': ['mandaili', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'aksara-jaini': ['jainiPurva', 'serif'],
      },
    },
  },
  plugins: [],
}
