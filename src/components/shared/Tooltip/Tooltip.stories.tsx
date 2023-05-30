import { Tooltip } from "./Tooltip";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * A `Tooltip` is used to show minimul, helpful information to users. Most commonly used
 * to describe the purpose of an icon
 */
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children: "Tip Me",
    message:
      "I am a tooltip that has a little bit more content then i probably should",
  },
  argTypes: { children: { control: "text" } },
  parameters: {
    layout: "centered",
  },
  render: (args) => {
    return (
      <div style={{ height: "150px", display: "flex", alignItems: "center" }}>
        <Tooltip {...args} />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
