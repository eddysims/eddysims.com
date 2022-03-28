import * as FeatherIcon from "react-feather";
import { customIcons } from "./customIcons";

import styles from "./Icon.module.css";

export type IconNames = keyof typeof FeatherIcon | keyof typeof customIcons;

export interface IconProps {
  readonly icon: IconNames;
  readonly size?: "base" | "small";
}

export function Icon({ icon, size = "base" }: IconProps) {
  const isCustomIcon = Object.keys(customIcons).includes(icon);

  const iconProps = {
    "data-testid": `icon-${icon}`,
    className: styles.icon,
  };

  const heights = {
    base: 20,
    small: 16,
  };

  const iconSize = heights[size];

  if (isCustomIcon) {
    const customIcon = customIcons[icon as keyof typeof customIcons];

    return (
      <svg
        {...iconProps}
        width={iconSize}
        height={iconSize}
        viewBox={customIcon.viewbox}
      >
        {customIcon.paths.map((path) => (
          <path key={path.d} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }

  /**
   * Disabling import/namespace here as we know that this
   * works, but there is some funk with eslint. We should
   * fix this at some time.
   */
  // TODO: Remove the eslint exception
  // eslint-disable-next-line import/namespace
  const Element = FeatherIcon[icon as keyof typeof FeatherIcon];

  return <Element {...iconProps} size={iconSize} />;
}
