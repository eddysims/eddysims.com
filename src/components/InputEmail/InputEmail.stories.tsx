import { Form } from "@/components/Form";

import { InputEmail } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputEmail> = {
  title: "form elements/InputEmail",
  component: InputEmail,
  render: (args) => <InputEmail {...args} />,
};

export default meta;
type Story = StoryObj<typeof InputEmail>;

export const Primary: Story = {};

export const WithForm: Story = {
  render: (args) => (
    <Form onSubmit={() => alert("submitted")}>
      <InputEmail {...args} />
      <input type="submit" value="Submit" />
    </Form>
  ),
};
