import { useContext } from "react";

import { ToastProviderContext } from "@/providers/ToastProvider/ToastProvider";

export function useToast() {
  const context = useContext(ToastProviderContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context.toast;
}
