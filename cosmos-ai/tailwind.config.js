/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#10a37f',
        'custom-black': '#202123',
        'custom-gray': '#343541'
      },
    },
  },
  plugins: [],
}