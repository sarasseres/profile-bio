/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        white: '#ffff',
        blue: '#092957',
        blues: '#CCE0FF',
        bluesky: '#1D7AFC',
      },
    },
  },
  plugins: [],
};
