/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
    },
    extend: {
      colors: {
        primary: "#25c870",
        secondary: "#131316",
        grayColor: "#595962",
        third: "#03C988",
      },
      backgroundImage: {
        faq: "url('./images/bg.svg')",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
