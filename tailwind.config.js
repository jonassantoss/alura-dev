/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#96B9FD',
          200: '#7BA4FC',
          300: '#5081FB',
          950: '#051D3B'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'alura': '0px 16px rgba(0, 0, 0, 0.24',
      }
    },
  },
  plugins: [],
}