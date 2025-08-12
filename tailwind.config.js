// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'toursoft-blue': '#007BFF', // Este es un azul de ejemplo, ajústalo al de tu logo/botones
        'dark-text': '#333333', // Ajusta si el gris oscuro es diferente
        'light-gray-bg': '#F5F5F5', // Si el fondo es ligeramente gris
      },
    },
  },
  plugins: [],
};
