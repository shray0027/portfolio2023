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
      darkBackground: {
        DEFAULT: '#121212',
        '50': '#BFBFBF',
        '100': '#B5B5B5',
        '200': '#A1A1A1',
        '300': '#8C8C8C',
        '400': '#787878',
        '500': '#646464',
        '600': '#4F4F4F',
        '700': '#3B3B3B',
        '800': '#262626',
        '900': '#121212'
      },
      darkSurface: {
        DEFAULT: '#1E1E1E',
        '50': '#CBCBCB',
        '100': '#C1C1C1',
        '200': '#ADADAD',
        '300': '#989898',
        '400': '#848484',
        '500': '#707070',
        '600': '#5B5B5B',
        '700': '#474747',
        '800': '#323232',
        '900': '#1E1E1E'
      },
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
