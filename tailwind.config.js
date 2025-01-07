/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',  // Scans all files with these extensions in the src folder
    './public/**/*.html',               // Scans all HTML files in the public folder
    './components/**/*.{html,js,ts,jsx,tsx}', // Scans files in a components folder if you have one
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

