import plugin from '@sveltejs/adapter-auto';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins'],
        'secondary': ['Montserrat']
      }
    },
  },
  plugins: [],
}
