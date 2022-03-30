import { XOR } from "ts-xor";
import { Icon, IconNames } from "@/components/Icon";
import styles from "./Button.module.css";

type BaseButtonProps = {
  onClick(): void;
};

type TextButtonProps = BaseButtonProps & {
  readonly title: string;
};

type IconButtonProps = BaseButtonProps & {
  readonly title?: string;
  readonly icon: IconNames;
};

type ButtonProps = XOR<TextButtonProps, IconButtonProps>;

export function Button({ title, icon, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {icon && (
        <span className={styles.icon}>
          <Icon icon={icon} />
        </span>
      )}

      {title && <span className={styles.text}>{title}</span>}
    </button>
  );
}
