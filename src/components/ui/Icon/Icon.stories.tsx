import { Icon } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * Icons are used to visually communicate parts of the site.
 *
 * ## Usage
 *
 * ```tsx
 * import { Icon } from "@/components/ui/Icon";
 * ````
 */

const meta: Meta<typeof Icon> = {
  component: Icon,
  args: {
    icon: "close-line",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};
