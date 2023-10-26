/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0 14px 0 0px #F0C70A',
        '4xl':"0 30px 0 0 #F0C70A"
      }
      ,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        defence_blue: "#131E25",
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        roboto_condensed: ['Roboto Condensed', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode:"class"
}
