import clsx from "clsx";

export const styles = {
  toast: (variation = "success") =>
    clsx("relative max-w-sm rounded shadow overflow-hidden", {
      "bg-red-500 text-text": variation === "error",
      "bg-green-400 text-surface": variation === "success",
    }),
  content: clsx("py-4 pl-6 pr-8"),
  close: clsx("absolute top-2 right-2"),
  timer: (variation = "succcess") =>
    clsx("h-1 w-full", {
      "bg-red-700 text-text": variation === "error",
      "bg-green-600 text-surface": variation === "success",
    }),
};
