import { ToastContainer } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `ToastContainer` holds all of the toast messages
 * within the `ToastProvider`.
 *
 * If there are no toasts, the container will not render.
 *
 * ## Usage
 *
 * ```tsx
 * import { ToastContainer } from "@/providers/ToastProvider/components/ToastContainer";
 * ```
 *
 */
const meta: Meta<typeof ToastContainer> = {
  title: "providers/ToastProvider/components/ToastContainer",
  component: ToastContainer,
  render: () => <ToastContainer />,
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;
export const Primary: Story = {};
