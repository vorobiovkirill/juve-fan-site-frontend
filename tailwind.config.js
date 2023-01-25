const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    colors: {
      customBlack: '#010101',
      customGray: '#66615e',
      customYellow: '#fec72e',
      customYellowHover: '#c79800',
      championsLeague: '#3562a6',
      europaLeague: '#f1c062',

    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require('flowbite-typography')],
}
