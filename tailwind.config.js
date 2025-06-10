/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gold: '#D4B254',
        darkGray: '#222222',
        lightGray: '#EEEEEE',
        mediumGray: '#777777',
        black80: '#00000080',
        black33: '#00000033',
      },
    },
  },
  plugins: [],
}

