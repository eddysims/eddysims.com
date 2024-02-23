import { ErrorMessage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { ErrorMessage } from "@/components/common/ErrorMessage";
 * ```
 */
const meta: Meta<typeof ErrorMessage> = {
  title: "typography/ErrorMessage",
  component: ErrorMessage,
  args: {
    label: "Goodbye World",
  },
  render: (args) => <ErrorMessage {...args} />,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
