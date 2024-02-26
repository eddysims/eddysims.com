"use client";

import { PropsWithChildren, createContext, useMemo } from "react";

import { ToastContainer } from "./components/ToastContainer";
import { useToastContext } from "./hooks/useToastContext";

export type Toast = {
  id: string;
  message: string;
  variation?: "success" | "error";
};

export type ToastParam = Pick<Toast, "message" | "variation"> | string;

type ToastProviderContextProps = {
  toasts: Toast[];
  toast: (toast: ToastParam) => void;
  removeToast: (id: string) => void;
};

export const ToastProviderContext = createContext<
  ToastProviderContextProps | undefined
>(undefined);

export function ToastProvider({ children }: Readonly<PropsWithChildren>) {
  const { toasts, toast, removeToast } = useToastContext();

  const value = useMemo(
    () => ({ toast, toasts, removeToast }),
    [toasts, toast, removeToast],
  );

  return (
    <ToastProviderContext.Provider value={value}>
      {toasts && toasts?.length > 0 && <ToastContainer />}
      {children}
    </ToastProviderContext.Provider>
  );
}
