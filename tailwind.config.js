/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'constellation': 'url("/src/assets/backgrounds/constellation-light-3.svg")',
      }
    },
  },
  plugins: [],
}

