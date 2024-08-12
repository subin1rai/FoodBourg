/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-80': 'calc(100vh - 80px)',
      },
      
      colors: {
        primary: '#C41E24',
      },
    },
  },
  plugins: [],
}