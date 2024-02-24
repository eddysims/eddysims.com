import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
import { ContactDrawerButton } from "@/providers/ContactDrawerProvider/components/ContactDrawerButton";

import type { Meta } from "@storybook/react";

/**
 * The `ContactDrawerButton` can be used to toggle the
 * `ContactDrawerProvider` open and closed.
 *
 * ## Usage
 *
 * ```tsx
 * import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider/components/ContactDrawerButton";
 * ```
 *
 */
const meta: Meta<typeof ContactDrawerButton> = {
  title: "providers/ContactDrawerProvider/components/ContactDrawerButton",
  component: ContactDrawerButton,
  args: {
    label: "Open the drawer",
  },
  render: () => (
    <ContactDrawerProvider>The rest of your App...</ContactDrawerProvider>
  ),
  decorators: [
    (Story) => (
      <ContactDrawerProvider>
        <Story />
      </ContactDrawerProvider>
    ),
  ],
};

export default meta;

export const Primary = ({ ...args }) => {
  return <ContactDrawerButton label={args.label} {...args} />;
};
