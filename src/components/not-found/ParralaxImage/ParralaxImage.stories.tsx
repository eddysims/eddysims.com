import { Meta, StoryObj } from "@storybook/react";

import { ParralaxImage } from ".";

/**
 * The ParralaxImage component is used to display the not found image
 * with a paralax mousehover effect.
 *
 * ## Usage
 *
 * ```tsx
 * import { ParralaxImage } from "@/components/not-found/ParralaxImage";
 * ```
 */
const meta: Meta<typeof ParralaxImage> = {
  title: "not found/ParralaxImage",
  component: ParralaxImage,
  render: () => <ParralaxImage />,
};

export default meta;
type Story = StoryObj<typeof ParralaxImage>;
export const Primary: Story = {};
