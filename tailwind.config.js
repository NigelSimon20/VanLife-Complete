/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lightPink: '#FFF7ED',
        lightOrange: '#FF8C38',
        darkOrange: '#E17654'
      },
      fontFamily:{
      variant:['inter']
      }
    },
  },
  plugins: [],
}
