import { Form } from "@/components/Form";

import { InputText } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputText> = {
  title: "forms/InputText",
  component: InputText,
  render: (args) => <InputText {...args} />,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Primary: Story = {};

export const WithForm: Story = {
  render: (args) => (
    <Form onSubmit={() => alert("submitted")}>
      <InputText {...args} />
      <input type="submit" value="Submit" />
    </Form>
  ),
};
