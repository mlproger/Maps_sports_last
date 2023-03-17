/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColorMain: '#c8d8e4',
        navBarColor: '#ffffff',
        btnColor: '#e99f4c',
        btnColorHover: '#e97b0a'
      }
    },
  },
  plugins: [],
}
