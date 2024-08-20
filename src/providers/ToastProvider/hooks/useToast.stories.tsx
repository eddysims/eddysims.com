import { Button } from "@/components/ui/Button";

import { useToast } from "./useToast";

import type { Meta } from "@storybook/react";

/**
 * The `useToast` hook is used to render a toast message.
 *
 * ## Usage
 *
 * ```tsx
 * import { useToast } from "@/providers/ToastProvider/hooks/useToast";
 * ```
 *
 */
const meta: Meta = {
  title: "providers/ToastProvider/hooks/useToast",
};

export default meta;

export const Primary = () => {
  const toast = useToast();

  return <Button label="Toast me" onClick={() => toast("Hello!")} />;
};

/**
 * The toast message can be customized by
 * passing an object with a `message` and a
 * `variation` property. This allows for different
 * types of toast messages
 */
export const Variations = () => {
  const toast = useToast();

  return (
    <div className="flex gap-2">
      <Button
        label="Success Toast"
        onClick={() =>
          toast({ message: "That was a success!", variation: "success" })
        }
      />
      <Button
        variation="outline"
        label="Error Toast"
        onClick={() =>
          toast({ message: "That was not a success...", variation: "error" })
        }
      />
    </div>
  );
};
