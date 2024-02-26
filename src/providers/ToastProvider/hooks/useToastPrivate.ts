import { useContext } from "react";

import { ToastProviderContext } from "@/providers/ToastProvider/ToastProvider";

export const useToastPrivate = () => {
  const context = useContext(ToastProviderContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
