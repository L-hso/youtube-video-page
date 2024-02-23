/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors:{
        'youtube-darkest':'#232323',
        'youtube-dark':'#333333',
        'youtube-gray':'#3d3d3d',
        'youtube-light-gray':'#aaaaaa'
      },

    },
  },
  plugins: [],
}

