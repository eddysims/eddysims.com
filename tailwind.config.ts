import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".shadow-border": {
          "box-shadow": "0 0 0 4px #E81604 inset",
        },
      });
    }),
  ],
};

export default config;
