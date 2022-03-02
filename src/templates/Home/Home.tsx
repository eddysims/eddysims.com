import { Layout } from "@/components/Layout";
import { Heading } from "@/components/Heading";

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
        <Heading as="h1">
          Eddy Sims<span className={styles.heart}>.</span>
        </Heading>
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
