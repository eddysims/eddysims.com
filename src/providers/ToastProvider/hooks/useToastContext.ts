import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type {
  Toast,
  ToastParam,
} from "@/providers/ToastProvider/ToastProvider";

export const useToastContext = () => {
  const [toasts, setToasts] = useState<Toast[]>([
    { id: "1", message: "test", variation: "success" },
    { id: "2", message: "test", variation: "error" },
    {
      id: "3",
      message:
        "test with a really really long message that i will want to break into multiple lines",
      variation: "success",
    },
  ]);

  const toast = (message: ToastParam) => {
    const id = uuidv4();

    if (typeof message === "string") {
      message = { message };
    }

    setToasts([...toasts, { id, ...message }]);
  };

  return {
    toasts,
    toast,
  };
};
