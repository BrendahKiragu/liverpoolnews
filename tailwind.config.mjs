/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
