/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

const baseSpacing = spacing["5"];
const borderColor = colors.neutral["200"];

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f2ede7",
        primary: "#a3160a",
        secondary: "#e7dfd6",
        border: borderColor,
      },
      fontFamily: {
        base: ["var(--raleway-font)", ...fontFamily.sans],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          paddingLeft: baseSpacing,
          paddingRight: baseSpacing,
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "1000px",
          },
        },
      });
    },
    function ({ addComponents }) {
      const arrowStyles = { position: "relative" };
      const arrowPseudoStyles = {
        content: '""',
        position: "absolute",
        width: 0,
        height: 0,
      };
      const arrows = {
        ".arrow-left": {
          ...arrowStyles,
          "&::after, &::before": {
            ...arrowPseudoStyles,
            left: 0,
            top: "50%",
            transform: "translate(-100%, -50%)",
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderRight: "8px solid white",
          },
          "&::before": {
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: `9px solid ${borderColor}`,
          },
        },
        ".arrow-right": {
          ...arrowStyles,
          "&::after, &::before": {
            ...arrowPseudoStyles,
            right: 0,
            top: "50%",
            transform: "translate(100%, -50%)",
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: "8px solid white",
          },
          "&::before": {
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: `9px solid ${borderColor}`,
          },
        },
        ".arrow-bottom": {
          ...arrowStyles,
          "&::after, &::before": {
            ...arrowPseudoStyles,
            left: "50%",
            bottom: 0,
            transform: "translate(-50%, 100%)",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "8px solid white",
          },
          "&::before": {
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `9px solid ${borderColor}`,
          },
        },
        ".arrow-top": {
          ...arrowStyles,
          "&::after, &::before": {
            ...arrowPseudoStyles,
            left: "50%",
            top: 0,
            transform: "translate(-50%, -100%)",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: "8px solid white",
          },
          "&::before": {
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `9px solid ${borderColor}`,
          },
        },
      };

      addComponents(arrows);
    },
  ],
};
