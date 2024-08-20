import { SocialLink } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { SocialLink } from "@/components/social/SocialLink";
 * ```
 */
const meta: Meta<typeof SocialLink> = {
  title: "socials/SocialLink",
  component: SocialLink,
  args: {
    href: "https://www.linkedin.com/in/eddysims/",
    icon: "linkedin-line",
  },
  render: (args) => <SocialLink {...args} />,
};

export default meta;
type Story = StoryObj<typeof SocialLink>;
export const Primary: Story = {};
