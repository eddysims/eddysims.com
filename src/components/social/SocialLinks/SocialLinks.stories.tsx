import { Meta, StoryObj } from "@storybook/react";

import { SocialLinks } from ".";

/**
 * ## Usage
 *
 * ```tsx
 * import { SocialLinks } from "@/components/social/SocialLinks";
 * ```
 */
const meta: Meta<typeof SocialLinks> = {
  title: "socials/SocialLinks",
  component: SocialLinks,
  render: (args) => <SocialLinks {...args} />,
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;
export const Primary: Story = {};
