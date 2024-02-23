import { ContactForm } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContactForm> = {
  title: "forms/ContactForm",
  component: ContactForm,
  render: () => <ContactForm />,
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary: Story = {};
