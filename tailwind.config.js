/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'honey': '#FFA638',
      },
      gradientColorStops: {
        honeyStart: '#FF9D2D', 
        honeyEnd: '#FFD877',
      },
    },
  },
  plugins: [],
}

