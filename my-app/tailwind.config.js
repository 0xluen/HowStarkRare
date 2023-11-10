/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mytheme: {
      primary: "#8f76e0",

      secondary: "#e27fd7",

      accent: "#577ec1",

      neutral: "#1e1825",

      "base-100": "#37383f",

      info: "#4c65e1",

      success: "#5ce0bd",

      warning: "#d38509",

      error: "#f37277",
    },
  },
  plugins: [],
};
