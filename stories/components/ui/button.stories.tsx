import { Button } from "@/components/ui/button";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>A basic button</Button>,
};
