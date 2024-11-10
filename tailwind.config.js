/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
