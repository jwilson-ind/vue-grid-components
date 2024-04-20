const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/Components/**/*.vue'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      gray: colors.gray,
      slate: colors.slate,
    },
  },
  plugins: [],
}
