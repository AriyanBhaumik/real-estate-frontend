/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'green-100': '#d1fae5',
          'green-500': '#10b981',
          'green-700': '#047857',
          'green-300': '#86efac',
          'green-600': '#22c55e',
        },
      },
    },
    plugins: [],
  }