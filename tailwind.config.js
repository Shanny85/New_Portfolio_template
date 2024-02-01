/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headingText: "#022D36",
        smallText: "#d7d5d2",
        secondaryAccent: "#1497D4",
        primaryAccent: "#FFD301",
      }
    },
  },
  plugins: [],
}

