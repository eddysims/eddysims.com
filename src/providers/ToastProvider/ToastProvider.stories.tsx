import { Button } from "@/components/ui/Button";

import { useToast } from "./hooks/useToast";

import { ToastProvider } from ".";

import type { Meta } from "@storybook/react";

/**
 * The `ToastProvider` is used to display toast messages throughout
 * the app.
 *
 * ## Usage
 *
 * ```tsx
 * import { ToastProvider } from "@/providers/ToastProvider";
 * ```
 *
 */
const meta: Meta<typeof ToastProvider> = {
  title: "providers/ToastProvider",
  component: ToastProvider,
  render: () => <ToastProvider>The rest of your App...</ToastProvider>,
};

export default meta;

export const Primary = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => toast("Cheers from the toast provider!")}
      label="Toast me"
    />
  );
};
