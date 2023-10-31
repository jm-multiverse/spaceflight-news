const themeSwapper = require('tailwindcss-theme-swapper')

const lightTheme = {
  backgroundImage: {
    'constellation': 'url("/src/assets/backgrounds/constellation-light.svg")',
    'hamburger': 'url("/src/assets/icons/hamburger-black.svg")',
    'satellite': 'url("/src/assets/icons/satellite-black.svg")',
    'semi-transparent': 'linear-gradient(rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0))',
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
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'mosaic': 'url("/src/assets/backgrounds/jwst-orion-mosaic.jpg")',
        'mosaic-long': 'url("/src/assets/backgrounds/jwst-orion-mosaic-long.jpg")',
        'birth-suns': 'url("/src/assets/backgrounds/jwst-birth-suns.jpg")',
        'abstract-timekeeper': 'url("/src/assets/backgrounds/abstract-timekeeper.svg")',
        'abstract-timekeeper-2': 'url("/src/assets/backgrounds/abstract-timekeeper-2.svg")',
        'abstract-timekeeper-3': 'url("/src/assets/backgrounds/abstract-timekeeper-3.svg")',
        'abstract-timekeeper-4': 'url("/src/assets/backgrounds/abstract-timekeeper-4.svg")',
        'endless-constellation': 'url("/src/assets/backgrounds/endless-constellation.svg")',
        'hollowed-boxes': 'url("/src/assets/backgrounds/hollowed-boxes.svg")',
        'parabolic-ellipse': 'url("/src/assets/backgrounds/parabolic-ellipse.svg")',
        'parabolic-ellipse-2': 'url("/src/assets/backgrounds/parabolic-ellipse-2.svg")',
        'parabolic-ellipse-3': 'url("/src/assets/backgrounds/parabolic-ellipse-3.svg")',
        'parabolic-pentagon': 'url("/src/assets/backgrounds/parabolic-pentagon.svg")',
        'parabolic-pentagon-2': 'url("/src/assets/backgrounds/parabolic-pentagon-2.svg")',
        'parabolic-triangle': 'url("/src/assets/backgrounds/parabolic-triangle.svg")',
        'parabolic-triangle-2': 'url("/src/assets/backgrounds/parabolic-triangle-2.svg")',
        'parabolic-triangle-3': 'url("/src/assets/backgrounds/parabolic-triangle-3.svg")',
        'rainbow-vortex': 'url("/src/assets/backgrounds/rainbow-vortex.svg")',
        'rainbow-vortex-2': 'url("/src/assets/backgrounds/rainbow-vortex-2.svg")',
        'varying-stripes': 'url("/src/assets/backgrounds/varying-stripes.svg")',


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
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