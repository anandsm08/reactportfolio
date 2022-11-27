/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akira: 'Akira'
      },
      colors:{
        'dark1':'#363062',
        'dark2':'#4D4C7D',
        'dark3':'#827397',
        'dark4':'#D8B9C3',
        'dark5':'#1C0C5B',
        'dark6':'#3D2C8D',
        'dark7':'#916BBF',
        'light':'#BCEAD5',

      }
    },
  },
  plugins: [],
}
