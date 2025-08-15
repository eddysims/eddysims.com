import React from "react";
import { toast } from "sonner";

export function useCopyToClipboard() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (str: string) => {
    try {
      await navigator.clipboard.writeText(str);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      toast.success("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy code:", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  return { copied, copyToClipboard };
}
