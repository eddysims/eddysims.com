import { withNextRouter } from "storybook-addon-next-router";

import "@pids/styles/styles.css";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true, grid: { disable: true } },
};

export const decorators = [withNextRouter];
