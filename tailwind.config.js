/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'mac-silver': '#333943',
        'mac-keyboard': '#1E1F22',
      },
      boxShadow: {
        'inner-mac': 'inset 0 1px 2px 0 #000, 0 1px 1px 0 #1E1F22;',
      },
    },
  },
  plugins: [],
}
