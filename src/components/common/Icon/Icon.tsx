import React from "react";

import { icons } from "./utils/icons";

export type Icons = keyof typeof icons;

type IconProps = {
  readonly icon: Icons;
  readonly size?: "base" | "sm" | "lg";
};

export function Icon({ icon, size = "base" }: IconProps) {
  const sizeMap = {
    base: 20,
    sm: 16,
    lg: 24,
  };
  const ReactIcon = icons[icon];

  return <ReactIcon size={sizeMap[size]} />;
}
