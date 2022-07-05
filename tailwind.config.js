/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoC: 'repeat(auto-fit,minmax(15rem,1fr))'
      }
    }
  },
  plugins: []
}
