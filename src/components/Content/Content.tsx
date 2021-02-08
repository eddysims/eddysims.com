import { PropsWithChildren } from "react";
import styles from "./Content.module.css";

export function Content({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.content}>{children}</div>;
}
