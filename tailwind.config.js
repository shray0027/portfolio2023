/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      darkBackground: '#121212',
      darkSurface: '#1E1E1E',
      darkPrimary: '#BB86FC',
      darkSecondary: '#01DAC6',
      darkOnBackground: '#E0E0E0',
      darkOnSurface: '#E2E2E2',
      darkOnPrimary: '#020103',
      darkOnSecondary: '#000201'
    }
  },
  plugins: [],
}