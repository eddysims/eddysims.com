import { ToggleButton } from "@/features/ContactDrawer/components/ToggleButton";

import { ContactDrawerProvider } from ".";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `ContactDrawerProvider` allows for the contact drawer to be
 * opened and closed from anywhere in the app.
 *
 * ## Usage
 *
 * ```
 * import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
 * ```
 */
const meta: Meta<typeof ContactDrawerProvider> = {
  title: "providers/ContactDrawerProvider",
  component: ContactDrawerProvider,
  render: () => (
    <ContactDrawerProvider>
      <ToggleButton label="Open the drawer" />
    </ContactDrawerProvider>
  ),
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
