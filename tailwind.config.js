const themeSwapper = require('tailwindcss-theme-swapper')

const lightTheme = {
  backgroundImage: {
    'constellation': 'url("/src/assets/backgrounds/constellation-light.svg")',
    'hamburger': 'url("/src/assets/icons/hamburger-black.svg")',
    'satellite': 'url("/src/assets/icons/satellite-black.svg")',
    'semi-transparent': 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.0))',
  },
  colors: {
    primary: 'black',
  },

}

const darkTheme = {
  backgroundImage: {
    'constellation': 'url("/src/assets/backgrounds/constellation-dark.svg")',
    'hamburger': 'url("/src/assets/icons/hamburger-white.svg")',
    'satellite': 'url("/src/assets/icons/satellite-white.svg")',
  },
  colors: {
    primary: 'white',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
      backgroundImage: {
        'mosaic': 'url("/src/assets/backgrounds/jwst-orion-mosaic.jpg")',
        'mosaic-long': 'url("/src/assets/backgrounds/jwst-orion-mosaic-long.jpg")',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors: [':root'],
          theme: lightTheme,
        },
        {
          name: 'dark',
          selectors: ['.dark'],
          theme: darkTheme,
        },
      ],
    }),
  ],
}