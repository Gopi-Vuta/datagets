/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "29rem",
      },
      colors: {
        "main-dark": "#17153B",
        "main-medium": "#2E236C",
        "main-light": "#433D8B",
        "main-pale": "#C8ACD6",
        "gray-1": "#f2f3ff",
      },
    },
  },
  plugins: [],
};
