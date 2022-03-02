import { PropsWithChildren } from "react";

import styles from "./Hero.module.css";

export function Hero({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.hero}>{children}</div>;
}
