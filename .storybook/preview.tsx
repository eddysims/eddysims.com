import React from "react";
import type { Preview } from "@storybook/react";

import { display, body } from "../src/styles/fonts";

import { ToastProvider } from "../src/providers/ToastProvider/ToastProvider";

import "../src/app/globals.css";
import clsx from "clsx";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className={clsx(display.variable, body.variable, "text-text")}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
  tags: ["autodocs"]
};

export default preview;
