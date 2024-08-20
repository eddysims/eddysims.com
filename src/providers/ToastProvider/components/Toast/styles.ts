import clsx from "clsx";

export const styles = {
  toast: (variation = "success") =>
    clsx("relative max-w-sm overflow-hidden rounded shadow-md", {
      "text-text bg-red-500": variation === "error",
      "text-surface bg-green-400": variation === "success",
    }),
  content: clsx("py-4 pl-6 pr-8"),
  close: clsx("absolute right-2 top-2"),
  timer: (variation = "success") =>
    clsx("h-1 w-full", {
      "bg-red-700": variation === "error",
      "bg-green-600": variation === "success",
    }),
};
