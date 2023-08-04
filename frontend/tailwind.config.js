/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mi-fondo': '#000000',
        'fondo-form': '#e2e2e2',
        'card-fondo': '#414040'
      },

      borderRadius:{
        'md': '0.9rem',
      }
    },
  },
  plugins: [],
}