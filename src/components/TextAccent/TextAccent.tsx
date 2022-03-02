import { PropsWithChildren } from "react";

import styles from "./TextAccent.module.css";

export function TextAccent({ children }: PropsWithChildren<unknown>) {
  return <span className={styles.accent}>{children}</span>;
}
