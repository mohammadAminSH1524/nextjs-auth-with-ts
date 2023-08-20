/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "rgb(var(--primaryText) / <alpha-value>)",
        secondaryText: "rgb(var(--secondaryText) / <alpha-value>)",
        primaryBg: "rgb(var(--primaryBackground) / <alpha-value>)",
        inputBg: "rgb(var(--inputBackground) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
       

        // "opaque-black": "rgba(0,0,0,0.35)",
      },
     
    },
  },
  plugins: [],
};


// black: "#141414",
// blue: "#2CBCE9",
// red: "#DC4492",
// yellow: "#FDCC49",