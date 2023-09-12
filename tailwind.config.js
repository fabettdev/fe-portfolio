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
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
