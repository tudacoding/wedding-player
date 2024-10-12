import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "svn-snell": ["SVN-Snell", "sans-serif"],
        "eb-garamond": ["var(--font-eb-garamond)"],
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        primary: "#205CA4",
        secondary: "#F2EDE9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
