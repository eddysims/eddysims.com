import { Section } from "./Section";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  args: {},
  render: (args) => {
    return <Section {...args}>I AM A SECTION</Section>;
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

/**
 * The `Section` component is used to create horizontal sections of the website.
 */
export const Default: Story = {};
