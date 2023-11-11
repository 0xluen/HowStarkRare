/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      yellow: "#FCD363",
      white: " #D9D9D9",
      gray: "#9CA3AF",
      beyaz: "#FFFFFF",
      purple: "#906DE0",
      darkpurple: "#1B0B29",
      blue: "#5FC4E0",
      darkgray: "#666666",
      footergray: "#7C7878",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
