import { ContactDrawerButton } from "./components/ContactDrawerButton/ContactDrawerButton";

import { ContactDrawerProvider } from ".";

import type { Meta } from "@storybook/react";

/**
 * The `ContactDrawerProvider` is used to open a `Drawer` with a `ContactForm` inside.
 * It is used to allow the Drawer to be opened from anywhere in the app.
 *
 * ## Usage
 *
 * ```tsx
 * import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
 * ```
 *
 */
const meta: Meta<typeof ContactDrawerProvider> = {
  title: "providers/ContactDrawerProvider",
  component: ContactDrawerProvider,
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

export const Primary = () => {
  return <ContactDrawerButton label="Open the drawer" />;
};
