import { Text } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { Text } from "@/components/common/Text";
 * ```
 */
const meta: Meta<typeof Text> = {
  component: Text,
  render: (args) => <Text {...args}>Hello World</Text>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
