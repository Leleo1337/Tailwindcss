/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        brand: {
        100: '#c542f5',
        200: '#a703ff',
        300: '#4e1599'
        }
      },
      padding:{
        "teste": "10rem"
      }
    },
  },
  plugins: [],
}