import { Form } from "@/components/Form";

import { InputTextArea } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputTextArea> = {
  title: "forms/InputTextArea",
  component: InputTextArea,
  render: (args) => <InputTextArea {...args} />,
};

export default meta;
type Story = StoryObj<typeof InputTextArea>;

export const Primary: Story = {};

export const WithForm: Story = {
  render: (args) => (
    <Form onSubmit={() => alert("submitted")}>
      <InputTextArea {...args} />
      <input type="submit" value="Submit" />
    </Form>
  ),
};
