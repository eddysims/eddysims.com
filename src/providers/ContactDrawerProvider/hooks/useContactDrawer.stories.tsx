import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";

import { useContactDrawer } from "./useContactDrawer";

import type { Meta } from "@storybook/react";

/**
 * The `useContactDrawer` hook is used to access the state
 * and actions of the `ContactDrawerProvider`.
 *
 * ## Usage
 *
 * ```tsx
 * import { useContactDrawer } from "@/providers/ContactDrawerProvider/hooks/useContactDrawer";
 * ```
 *
 */
const meta: Meta<typeof ContactDrawerProvider> = {
  title: "providers/ContactDrawerProvider/hooks/useContactDrawer",
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
  const { open, setOpen } = useContactDrawer();

  return (
    <div>
      <p>drawer is: {open ? "open" : "closed"}</p>
      <hr />
      <button onClick={() => setOpen(!open)}>
        {open ? "Close Drawer" : "Open Drawer"}
      </button>
    </div>
  );
};
