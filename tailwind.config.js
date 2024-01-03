/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  purge: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        btn: "1px 2px 2px 1px rgb(0 0 0 /.75);",
      },
      minHeight: {
        card: "700px",
      },
      fontFamily: {
        josefin: '"Josefin Sans", sans-serif',
        montserat: '"Montserrat", sans-serif',
        nunito: '"Nunito", sans-serif',
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(320px, 1fr))",
      },
      backgroundColor: ["before", "after"],
      display: ["before", "after"],
      content: ["before", "after"],
    },
  },
  plugins: [],
};

//? npx tailwindcss -i ./assets/input.css -o ./assets/output.css --watch
