import { withNextRouter } from "storybook-addon-next-router";
import { Heading } from "@pids/components/Heading";
import { Text } from "@pids/components/Text";

import "@pids/styles/styles.css";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true, grid: { disable: true } },
  docs: {
    components: {
      h1: (props) => <Heading as="h1" {...props} />,
      p: Text,
    },
  },
};

export const decorators = [withNextRouter];
