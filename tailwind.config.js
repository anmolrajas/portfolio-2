/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#fff0f5', // Lavender Blush
          text: '#1a1a1a',
        },
        dark: {
          bg: '#1a1a1a', // Dark Charcoal
          accent: '#ff69b4', // Hot Pink
          text: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
