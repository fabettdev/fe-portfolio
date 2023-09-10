/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "var(--color-black)",
      white: "var(--color-white)",
      grey: "var(--color-grey)",
      darkGrey: "var(--color-dark-grey)",
      lightGrey: "var(--color-light-grey)",
    },
  },
  plugins: [],
};
