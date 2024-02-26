import React from "react";

import { icons } from "./utils/icons";

type Icons = keyof typeof icons;

type IconProps = {
  readonly icon: Icons;
};

export function Icon({ icon }: IconProps) {
  const ReactIcon = icons[icon];

  return <ReactIcon />;
}
