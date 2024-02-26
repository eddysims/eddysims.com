import clsx from "clsx";

export const styles = {
  toast: (variation = "success") =>
    clsx("relative py-4 pl-6 pr-8 max-w-sm rounded shadow", {
      "bg-red-500 text-text": variation === "error",
      "bg-green-400 text-surface": variation === "success",
    }),
  close: clsx("absolute top-2 right-2"),
};
