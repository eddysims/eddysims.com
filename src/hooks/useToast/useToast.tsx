import {
  toast as reactToast,
  type TypeOptions,
  type ToastOptions,
  Slide,
} from "react-toastify";

import { cn } from "@/utils/cva";

import { CloseButton } from "./components/CloseButton";
import { Toast } from "./components/Toast";

type UseToastOptions = Pick<ToastOptions, "onOpen" | "onClose"> & {
  variant: TypeOptions;
};

export function useToast() {
  const toast = (
    content: string,
    options: UseToastOptions = { variant: "default" },
  ) => {
    const toastOptions: ToastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnFocusLoss: false,
      icon: false,
      transition: Slide,
      closeButton: ({ closeToast }) => (
        <CloseButton
          onClick={closeToast}
          className={styles_close_button(options.variant)}
        />
      ),
      className: styles_toast(options.variant),
      progressClassName: styles_progress(options.variant),
      ...options,
      type: options.variant,
    };

    return reactToast(<Toast title={content} />, toastOptions);
  };

  return toast;
}

const styles_close_button = (variant: TypeOptions) =>
  cn({
    "ring-red-100 ring-offset-red-500": variant === "error",
    "ring-green-600 ring-offset-green-400": variant === "success",
    "ring-yellow-600 ring-offset-yellow-400": variant === "warning",
  });

const styles_toast = (variant: TypeOptions) =>
  cn("min-h-0 rounded px-3 py-2 font-body text-sm shadow-md", {
    "bg-white text-slate-900": variant === "default",
    "bg-red-500 text-red-50": variant === "error",
    "bg-blue-200 text-blue-950": variant === "info",
    "bg-green-400 text-green-950": variant === "success",
    "bg-yellow-400 text-yellow-950": variant === "warning",
  });

const styles_progress = (variant: TypeOptions) =>
  cn("h-1 bg-none", {
    "bg-neutral-400": variant === "default",
    "bg-red-800": variant === "error",
    "bg-blue-400": variant === "info",
    "bg-green-700": variant === "success",
    "bg-yellow-700": variant === "warning",
  });
