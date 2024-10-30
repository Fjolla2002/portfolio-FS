/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseWhite: "#FFFFFF",
        lightGray: "#ECEEF2",
        darkGray: "#999999",
        darkerGray: "#222121",
        bgDarker: "rgba(10, 10, 10, 0.3)",
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #ffa500, #ff4500, #8b00ff)",
      },
    },
  },
  plugins: [],
};
