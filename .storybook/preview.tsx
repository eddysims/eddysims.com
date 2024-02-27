import React from "react";
import type { Preview } from "@storybook/react";

import { display, body } from "../src/styles/fonts";

import { ToastProvider } from "../src/providers/ToastProvider/ToastProvider";

import "../src/app/globals.css";
import clsx from "clsx";

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
      <ToastProvider>
        <div className={clsx(display.variable, body.variable)}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};

export default preview;
