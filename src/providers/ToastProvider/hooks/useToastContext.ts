import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type {
  Toast,
  ToastParam,
} from "@/providers/ToastProvider/ToastProvider";

export const useToastContext = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (message: ToastParam) => {
    const id = uuidv4();

    if (typeof message === "string") {
      message = { message };
    }

    setToasts([...toasts, { id, ...message }]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts?.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    toast,
    removeToast,
  };
};
