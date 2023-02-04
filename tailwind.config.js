/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#C47F17",

          300: "#DBAC2C",

          100: "#F1E9C9",
        },
        purple: {
          500: "#4B2995",

          300: "#8047F8",

          100: "#EBE5F9",
        },
        gray: {
          700: "#272221",

          500: "#403937",
          300: "#574F4D",
          100: "#8D8686",
        },
        base: {
          700: "#D7D5D5",
          500: "#E6E5E5",
          300: "#EDEDED",
          100: "#F3F2F2",
          50: "#FAFAFA",
        },
      },

      fontFamily: {
        roboto: "Roboto, sans-serif",
        baloo: "Baloo 2, cursive",
        itim: "Itim, cursive",
      },
    },
    plugins: [],
  },
};
