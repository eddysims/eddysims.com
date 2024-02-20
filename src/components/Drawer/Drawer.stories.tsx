import { useState } from "react";

import { Drawer } from ".";

import type { Meta, StoryObj } from "@storybook/react";

function StoryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Drawer open={open} onRequestClose={() => setOpen(false)} />
    </>
  );
}

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
  render: StoryDrawer,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
