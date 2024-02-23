import { Text } from "./Text";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "typography/Text",
  component: Text,
  render: (args) => <Text {...args}>Hello World</Text>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
