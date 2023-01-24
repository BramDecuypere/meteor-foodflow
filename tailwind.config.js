/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./imports/ui/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'orange': "#FF6E28",
        'black': '#363636'
      },
      fontFamily: {
        'sans': ['Nunito', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'light': '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        'lighter': '0 0 10px 2px rgba(0, 0, 0, 0.05)',
        'medium': '0 0 25px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
