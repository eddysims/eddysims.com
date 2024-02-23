import { InputLabel } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { InputLabel } from "@/components/common/InputLabel";
 * ```
 */
const meta: Meta<typeof InputLabel> = {
  title: "form elements/InputLabel",
  component: InputLabel,
  args: {
    label: "First and last name",
    htmlFor: "input",
  },
  render: (args) => <InputLabel {...args} />,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
