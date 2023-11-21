/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/dist/flowbite.min.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': "'Cinzel', serif",
      },
    }
  },
  plugins: [
    // require('flowbite/plugin'),
    require("daisyui")
  ],
}