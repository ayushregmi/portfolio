/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-background": "#0D1117",
        "text-gray": "#737B85",
        "text-white": "#E6EDF3",
        "text-green": "#3FB950",
        "text-red": "#E9785C",
        "text-yellow": "#D2991F",
        "color-blue": "#1F6FEB",
        "border-color": "#30363D",
        "hover-color": "#25292D",
        "orange-color": "#F78166",
        "text-blue": "#6BA9E1",
        "secondary-background": "#010409",
        "text-purple": "#C6A8FF",
        "text-light-blue": "#83D6FF",
        "text-orange": "#FFA657",
      },
      fontFamily: { default: "Consolas, 'Courier New', monospace" },
      screens: { xs: "400px", ml: "900px" },
    },
  },
  plugins: [],
};
