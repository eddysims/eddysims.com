import clsx from "clsx";

export const styles = {
  toast: (variation = "success") =>
    clsx("py-3 px-5 max-w-sm rounded shadow", {
      "bg-red-500 text-text": variation === "error",
      "bg-green-400 text-surface": variation === "success",
    }),
};
