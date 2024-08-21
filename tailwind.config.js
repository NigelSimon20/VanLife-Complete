/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lightPink: '#FFF7ED',
        lightOrange: '#FF8C38',
        darkOrange: '#E17654',
        green: '#115E59',
        reddish:'#E17654',
        lighterPink:'#FFEAD0',
        orange:'#FF8C38'
      },
      fontFamily:{
      variant:['inter']
      }
    },
  },
  plugins: [],
}
