/* eslint-disable @typescript-eslint/no-require-imports */
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      screens: {
        ...defaultTheme.screens,
        "3xl": defaultTheme.screens["2xl"],
      },
    },
    fontFamily: {
      display: ["var(--font-display)"],
      body: ["var(--font-body)"],
    },
    extend: {
      screens: {
        "3xl": "2110px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".shadow-border": {
          "box-shadow": `0 0 0 4px ${theme("colors.red.600")} inset`,
        },
        ".shadow-border-l-red-600": {
          "box-shadow": `4px 0 0 0 ${theme("colors.red.600")} inset`,
        },
        ".shadow-border-l": {
          "box-shadow": `0 0 0 0 ${theme("colors.transparent")} inset`,
        },
      });
    }),
  ],
};

export default config;
