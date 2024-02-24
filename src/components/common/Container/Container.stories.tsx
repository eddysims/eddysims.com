import { Container } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Usage
 *
 * The `Container` component is used to wrap content in a centered container.
 *
 * ```tsx
 * import { Container } from "@/components/common/Container";
 * ```
 */
const meta: Meta<typeof Container> = {
  title: "layout/Container",
  component: Container,
  render: (args) => <Container {...args}>Hello World</Container>,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
