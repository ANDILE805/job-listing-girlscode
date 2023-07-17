/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/src/assets/App-image.jpg')",
        'bgImg': "url('/src/assets/backgrond-image.jpg')",
        'img': "url('/src/assets/postjobs-background.jpg')",
      },
      colors:{
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

