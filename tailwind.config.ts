import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import { styles as toast } from "./src/providers/ToastProvider/components/Toast/styles";
import { styles as toastContainer } from "./src/providers/ToastProvider/components/ToastContainer/styles";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    toast.toast("success"),
    toast.toast("error"),
    toast.timer("success"),
    toast.timer("error"),
    toast.content,
    toast.close,
    toastContainer,
  ],
  theme: {
    container: {
      center: true,
      screens: {
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
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".shadow-border": {
          "box-shadow": `0 0 0 4px ${theme("colors.red.600")} inset`,
        },
      });
    }),
  ],
};

export default config;
