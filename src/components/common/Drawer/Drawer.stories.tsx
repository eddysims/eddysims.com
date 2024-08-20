import { useArgs } from "@storybook/preview-api";

import { Button } from "@/components/ui/Button";

import { Drawer } from ".";

import type { Meta } from "@storybook/react";

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
  render: (args) => <Default {...args} />,
};

export const Default = ({ ...args }) => {
  const [{ open }, updateArgs] = useArgs();

  return (
    <>
      <Button label="Open Drawer" onClick={() => updateArgs({ open: true })} />
      <Drawer
        {...args}
        open={open}
        onRequestClose={() => {
          updateArgs({ open: false });
        }}
      />
    </>
  );
};

export default meta;
