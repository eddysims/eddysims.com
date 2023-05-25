import { spacing } from "tailwindcss/defaultTheme";

import { icons } from "./icons";

export type IconNames = keyof typeof icons;

interface IconProps {
  readonly name: IconNames;
  readonly fill?: boolean;
  readonly size?: "base" | "small" | "large" | "larger" | "auto";
}

export function Icon({ name, fill, size = "base" }: IconProps) {
  const sizes = {
    small: spacing["4"],
    base: spacing["5"],
    large: spacing["6"],
    larger: spacing["7"],
    auto: "auto",
  };

  const ReactIcon = icons[name];

  const styles = {
    display: "inline-flex",
    stroke: "currentColor",
    ...(fill && { fill: "currentColor" }),
  };

  return (
    <ReactIcon size={sizes[size]} style={styles} data-testid={`icon-${name}`} />
  );
}
