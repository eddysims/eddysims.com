import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ['../public/'],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
