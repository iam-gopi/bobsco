/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: ["group-hover"],
      colors: {
        primaryRed: "#ed1c24",
        primaryDarkBlue: "#002C42",
      },
    },
  },
  plugins: [],
};
