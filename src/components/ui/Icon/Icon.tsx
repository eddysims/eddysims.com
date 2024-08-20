import { cn } from "@/utils/cva";

import type { IconNames } from "./Icon.types";

type IconProps = {
  size?: "sm" | "base" | "lg";
  icon: IconNames;
  title?: string;
};

export function Icon({ icon, size = "base", title }: IconProps) {
  return (
    <svg className={styles(size)}>
      <title>{title ? title : icon}</title>
      <use href={`./icons/sprite.svg#${icon}`} />
    </svg>
  );
}

const styles = (size: IconProps["size"]) =>
  cn({
    "size-4": size === "sm",
    "size-5": size === "base",
    "size-6": size === "lg",
  });
