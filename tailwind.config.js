/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',   // Ensure this includes the HTML files in the public directory.
    './src/**/*.{js,jsx,ts,tsx,css}'
  ],
  theme: {
    extend: {
      fontFamily: {
        margarine: ["Margarine", 'serif']
      },
      boxShadow: {
        'custom-green': '0px 0px 250px 238px rgba(58, 125, 68, 0.25)',
      },
      screens: {
        'max-tablet': {'max': '768px'},
        'max-mobile-L': {'max': '425px'},
        'max-mobile-M': {'max': '375px'},
        'max-mobile-S': {'max': '320px'}
      }
    },
  },
  plugins: [],
}

