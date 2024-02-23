import { Heading } from "./Heading";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "typography/Heading",
  component: Heading,
  render: (args) => <Heading {...args}>Hello World</Heading>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
