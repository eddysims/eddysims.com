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
};

export const ToastProviderContext = createContext<
  ToastProviderContextProps | undefined
>(undefined);

export function ToastProvider({ children }: Readonly<PropsWithChildren>) {
  const { toasts, toast } = useToastContext();

  const value = useMemo(() => ({ toasts, toast }), [toasts, toast]);

  return (
    <ToastProviderContext.Provider value={value}>
      {toasts && toasts?.length > 0 && <ToastContainer />}
      {children}
    </ToastProviderContext.Provider>
  );
}
