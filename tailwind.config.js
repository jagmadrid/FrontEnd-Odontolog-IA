const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: '#004379',
      secondary: '#16c4bb',
      terciary: '#edab00',
      gradiente1: '018d9f',
    },
  },
  plugins: [
  ],
}
