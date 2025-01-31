import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ACCENT:'rgba(var(--ACCENT), <alpha-value>)',
        LIGHT: 'rgba(var(--LIGHT), <alpha-value>)',
        DARK: 'rgba(var(--DARK), <alpha-value>)',
        accentNeon:"#06b6d4",
        rtlLight:"#F5F8FF",
        rtlDark:"#1f2937"
      },
    },
  },
  plugins: [],
};
export default config;
