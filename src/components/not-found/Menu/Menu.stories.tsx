import { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";

/**
 * ## Usage
 *
 * ```tsx
 * import { Menu } from "@/components/not-found/Menu";
 * ```
 */
const meta: Meta<typeof Menu> = {
  title: "not found/Menu",
  component: Menu,

  render: () => <Menu />,
};

export default meta;
type Story = StoryObj<typeof Menu>;
export const Primary: Story = {};
