/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { "protest-riot": "Protest Riot" },
      colors: {
        "color-1": "#2D3250",
        "color-2": "#424769",
        "color-3": "#7077A1",
      },
    },
  },
  plugins: [],
};
