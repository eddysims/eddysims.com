import { Text } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `Text` component is used to render text in the application.
 *
 * ## Usage
 *
 * ```
 * import { Text } from "@/components/Text";
 * ```
 */
const meta: Meta<typeof Text> = {
  title: "typography/Text",
  component: Text,
  render: (args) => <Text {...args}>Hello World</Text>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
