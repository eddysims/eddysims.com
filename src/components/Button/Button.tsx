import classNames from "classnames";
import { XOR } from "ts-xor";
import { Icon, IconNames } from "@/components/Icon";

import styles from "./Button.module.css";

type BaseButtonProps = {
  onClick(): void;
  /**
   * The size of the Button
   */
  readonly size?: "base" | "small";
};

type TextButtonProps = BaseButtonProps & {
  readonly title: string;
};

type IconButtonProps = BaseButtonProps & {
  readonly title?: string;
  readonly icon: IconNames;
};

type ButtonProps = XOR<TextButtonProps, IconButtonProps>;

export function Button({ title, icon, size = "base", onClick }: ButtonProps) {
  const buttonClasses = classNames(styles.button, styles[size]);

  return (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {icon && (
        <span className={styles.icon}>
          <Icon icon={icon} size={size} />
        </span>
      )}

      {title && <span className={styles.text}>{title}</span>}
    </button>
  );
}
