import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```
 * import { Button } from "@/components/Button";
 * ```
 *
 * ## Exported types
 *
 * The `Button` component has the following type exported:
 *
 * ```
 * import type { ButtonProps } from "@/components/Button";
 * ```
 */
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
