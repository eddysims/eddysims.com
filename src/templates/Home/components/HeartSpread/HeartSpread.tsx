import { TextAccent } from "@/components/TextAccent";

import styles from "./HeartSpread.module.css";

export function HeartSpread() {
  return (
    <div className={styles.spread}>
      <TextAccent>{`{`}</TextAccent>
      <TextAccent>...</TextAccent>
      <TextAccent>♥️</TextAccent>
      <TextAccent>{`}`}</TextAccent>
    </div>
  );
}
