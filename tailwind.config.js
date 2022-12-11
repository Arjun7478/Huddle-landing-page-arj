const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "Soft-Magenta": "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: "false",
  },
};
