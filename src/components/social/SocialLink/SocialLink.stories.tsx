import { Meta, StoryObj } from "@storybook/react";

import { SocialLink } from ".";

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
    icon: "linkedin",
  },
  render: (args) => <SocialLink {...args} />,
};

export default meta;
type Story = StoryObj<typeof SocialLink>;
export const Primary: Story = {};
