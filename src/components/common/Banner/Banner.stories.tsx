import { Meta, StoryObj } from "@storybook/react";

import { Banner } from ".";

/**
 * ## Usage
 *
 * ```tsx
 * import { Banner } from "@/components/common/Banner";
 * ```
 */
const meta: Meta<typeof Banner> = {
  title: "components/Banner",
  component: Banner,
  render: () => <Banner>Bruce Banner</Banner>,
};

export default meta;
type Story = StoryObj<typeof Banner>;
export const Primary: Story = {};
