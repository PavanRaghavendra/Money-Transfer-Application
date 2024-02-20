/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:
    {
      'babypink':'#F8f1f8',
      'second':'#052C39',
      'third':'#Ff890d',
      'white':'#ffffff',
      'black':'#000000'
    },
    backgroundImage:
    {
      'main-page':"url('/dWebOld.png')"
    }
  },
  plugins: [],
}