import styles from "../styles/Art.module.css";

import NextImage from "next/image";

export default function Art() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.art}>
          <NextImage src="/test.gif" width={500} height={500} />
        </div>
        <div className={styles.art}>
          <NextImage src="/test2.gif" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
