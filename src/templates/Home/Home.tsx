import { Layout } from "@/components/Layout";

import styles from "./Home.module.css";

export function Home() {
  return (
    <Layout title="Eddy Sims | Front End Developer">
      <div className={styles.main}>
        <div className={styles.spread}>
          {`{...`}
          <Heart />
          {`}`}
        </div>
        <h1 className={styles.h1}>
          Eddy Sims<span className={styles.heart}>.</span>
        </h1>
        <p className={styles.p}>
          Front end developer with over 15 years of experience. Looking to
          experiment here, and show off some of my personal work.
        </p>
      </div>
    </Layout>
  );
}

function Heart() {
  return <span className={styles.heart}>♥️</span>;
}
