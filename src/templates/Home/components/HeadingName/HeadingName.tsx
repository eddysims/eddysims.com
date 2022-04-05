import { TextAccent } from "@/components/TextAccent";

import styles from "./HeadingName.module.css";

export function HeadingName() {
  return (
    <h1 className={styles.heading}>
      Eddy Sims<TextAccent>.</TextAccent>
    </h1>
  );
}
