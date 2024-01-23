/* eslint-disable import/no-default-export */
import { Text } from "./Text";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * `Text` is used to add text to the page.
 *
 * ## Usage
 *
 * ```tsx
 * import { Text } from "@/revive/components/Text";
 * ```
 */
const meta: Meta<typeof Text> = {
  title: "typography/Text",
  component: Text,
  render: (args) => (
    <Text {...args}>
      Hello World
    </Text>
  ),
};

export default meta;
type Story = StoryObj<typeof Text>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {};
