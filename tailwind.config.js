/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'darkBlue': '#2c2c44',
      'neonGreen': '#58dcb4',
      'grayBlue': '#504c5c',
      'white': "#FFFFFF",
      'offWhite': "#9ca4ac"
    },
    extend: {},
  },
  plugins: [],
}
