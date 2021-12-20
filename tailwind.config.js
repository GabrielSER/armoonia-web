const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '470px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'primary': 'rgb(4, 120, 87)',
        'secondary': '#D5F5E6',
        'terceary': '#96CFBE',
        'quaternary': 'rgb(251, 191, 36)',
        'shadow': 'rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        montserrat: 'Montserrat',
        fleur: 'Fleur',
        moontime: 'Moontime'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
