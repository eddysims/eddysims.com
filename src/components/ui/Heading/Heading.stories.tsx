import { Heading } from "./Heading";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { Heading } from "@/components/common/Heading";
 * ```
 */
const meta: Meta<typeof Heading> = {
  component: Heading,
  render: (args) => <Heading {...args}>Hello World</Heading>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
