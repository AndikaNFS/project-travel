/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        welcome: "url('../public/images/welcome.jpeg)",
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-color-1': '#DAE8DA',
        'primary-color-2': '#4E944F',
        'secondary-color-1': '#CADFCA',
        'secondary-color-2': '#6D8B74',
        'secondary-color-3': '#FAFAFA',
        'text-color-1': '#404040',
        'text-color-2': '#D0D0D0',
        'text-color-3': '#7D7D7D',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
