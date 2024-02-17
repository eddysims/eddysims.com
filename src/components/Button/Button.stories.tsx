import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  args: {
    label: "Click me",
    onClick: () => alert("I was clicked"),
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
