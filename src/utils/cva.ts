import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export const { cx: cn } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
