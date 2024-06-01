/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'), require('daisyui'),],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['winter'],
          // primary: "blue",
          // secondary: '#A25AFF',
          // '--rounded-btn': '6rem',

        }
      }

      // "dark",
      // "light",
    ]
  }

}