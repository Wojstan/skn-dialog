/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2974bb',
        light: '#8b8b8b',
        dark: '#5c5c5c',
        hover: '#1786d4',
        pink: '#fdae9c',
        gray: '#f8f8f8',
        lightBlue: '#9bc2f5',
        lighterBlue: '#C8E0FF',
      },
    },
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
      cursive: ['"Caveat"', 'cursive'],
    },
  },
  plugins: [],
}
