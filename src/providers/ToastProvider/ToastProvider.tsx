"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type Toast = {
  id: string;
  message: string;
  variation?: "success" | "error";
};

type ToastParam = Pick<Toast, "message" | "variation"> | string;

type ToastProviderContextProps = {
  toast: (toast: ToastParam) => void;
};

export const ToastProviderContext = createContext<
  ToastProviderContextProps | undefined
>(undefined);

export function ToastProvider({ children }: Readonly<PropsWithChildren>) {
  const { toasts, toast, removeToast } = useToastContext();

  const handleRemove = (id: string) => {
    removeToast(id);
  };

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastProviderContext.Provider value={value}>
      {toasts && toasts?.length > 0 && (
        <div>
          TOASTS:
          {toasts.map((toast) => (
            <div key={toast.id}>
              id: {toast.id} <br />
              {toast.message}
              <button onClick={() => handleRemove(toast.id)}>[X]</button>
            </div>
          ))}
        </div>
      )}

      {children}
    </ToastProviderContext.Provider>
  );
}

const useToastContext = () => {
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

export const useToast = () => {
  const context = useContext(ToastProviderContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
