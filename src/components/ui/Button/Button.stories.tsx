import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { Button } from "@/components/common/Button";
 * ```
 */
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    label: "Click me",
    onClick: () => alert("Clicked me"),
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {};
