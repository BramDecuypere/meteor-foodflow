/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./imports/ui/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
