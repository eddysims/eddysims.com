import { ContactForm } from "./ContactForm";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContactForm> = {
  title: "forms/Contact Form",
  component: ContactForm,
  render: () => <ContactForm />,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
