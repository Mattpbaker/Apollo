/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apollo-blue': '#3B82F6',
        'apollo-yellow': '#FCD34D',
        'apollo-black': '#000000',
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'subtitle': ['Montserrat', 'sans-serif'],
        'caption': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
