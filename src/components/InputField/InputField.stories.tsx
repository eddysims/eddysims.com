import { InputField } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `InputField` component is a private component that should be used
 * to build other form element components. It should not be used directly
 * in the app.
 */
const meta: Meta<typeof InputField> = {
  title: "private/InputField",
  component: InputField,
  render: (args) => <InputField {...args} />,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {};
