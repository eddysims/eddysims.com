import React from "react";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

import { body, display } from "../src/styles/fonts";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${body.variable} ${display.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
