/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-teal" : "#418A94",
        "active-teal" : "#2f7c86",
        "disabled-teal" : "#c7dcdf",
        "secondary-teal" : "#9ec3c8"
      }
    },
  },
  plugins: []
}

