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
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      colors: {
        surface: {
          DEFAULT: "#171820",
        },
        text: {
          DEFAULT: "#F2EDE7",
        },
        primary: {
          DEFAULT: "#E81604",
        },
      },
    },
  },
  plugins: [],
};

export default config;
