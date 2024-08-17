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
        // primary: 'blue',
        primary: '#C41E24',
        icons:'text-white text-2xl',
      },      
    },
  },
  plugins: [],
}