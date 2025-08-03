/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue : '#0b2545',
        primaryOrange: 'rgb(255,94,12)'
      }
    },
  },
  plugins: [],
}
