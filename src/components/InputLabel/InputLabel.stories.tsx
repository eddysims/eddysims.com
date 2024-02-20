import { InputLabel } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputLabel> = {
  title: "form elements/InputLabel",
  component: InputLabel,
  args: {
    label: "Label",
    htmlFor: "input",
  },
  render: (args) => <InputLabel {...args} />,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
