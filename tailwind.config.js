/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        primary: '#1cd1e4',
        primaryDark: '#dde2f9',
        secondary: '#1d1e5d',
        secondaryLight: '#3635a7',
        primaryLight: '#f6faff',
      },
      boxShadow: {
        'primary-shadow': '0 0px 3px rgb(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}