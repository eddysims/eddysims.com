import { PropsWithChildren } from "react";

import styles from "./ColoredText.module.css";

export function ColoredText({ children }: PropsWithChildren<unknown>) {
  return <span className={styles.text}>{children}</span>;
}
