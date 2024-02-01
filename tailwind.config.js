/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Green: '#C5F82A',
        grey: '#333333',
        Darkgrey: '#1F1F1F',
        OffBlack: '#141414'
        
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

