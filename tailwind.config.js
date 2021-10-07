//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'gold': 'var(--gold)'
      },
      fontFamily: {
        montserrat: 'Montserrat',
        fleur: 'Fleur',
        moontime: 'Moontime'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
