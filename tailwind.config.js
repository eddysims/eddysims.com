const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

const baseSpacing = spacing['5'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#ef412d',
    },
    spacing: {
      md: baseSpacing,
      lg: spacing['10'],
    },
    fontFamily: {
      base: ['var(--raleway-font)', ...fontFamily.sans],
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: baseSpacing,
          paddingRight: baseSpacing,
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '1000px',
          },
        }
      })
    }
  ]
}
