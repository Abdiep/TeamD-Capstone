/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // semua file html di root
    "./src/**/*.{html,js,css}" // semua file di dalam folder src

  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
