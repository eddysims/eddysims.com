import { useState } from "react";

import { Button } from "../Button";

import { Drawer } from ".";

import type { Meta, StoryObj } from "@storybook/react";

function StoryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} label="Open Drawer" />
      <Drawer open={open} onRequestClose={() => setOpen(false)} />
    </>
  );
}

/**
 * ## Usage
 *
 * ```
 * import { Drawer } from "@/components/Drawer";
 * ```
 */

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
  render: StoryDrawer,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
