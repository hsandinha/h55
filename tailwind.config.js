// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Caminho para o app router
    "./components/**/*.{js,ts,jsx,tsx}", // Caminho para os componentes
  ],
  theme: {
    extend: {
      colors: {
        "h55-blue": "#0A2540",
        "h55-gold": "#B8860B",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair-display)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
