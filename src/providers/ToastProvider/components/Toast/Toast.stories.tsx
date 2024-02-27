import { Toast } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `Toast` component is used to display a toast message
 * throughout the app.
 *
 * ## Usage
 *
 * ```tsx
 * import { Toast } from "@/providers/ToastProvider/components/Toast";
 * ```
 *
 */
const meta: Meta<typeof Toast> = {
  title: "providers/ToastProvider/components/Toast",
  component: Toast,
  args: {
    toast: {
      id: "1",
      message: "This is a toast",
      variation: "success",
    },
  },
  render: (args) => <Toast {...args} />,
};

export default meta;
type Story = StoryObj<typeof Toast>;
export const Primary: Story = {};
