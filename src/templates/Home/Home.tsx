import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";

import styles from "./Home.module.css";

export function Home() {
  return (
    <Layout title="Eddy Sims | Front End Developer">
      <Hero>
        <Container size="small">
          <div className={styles.spread}>
            {`{...`}
            <Heart />
            {`}`}
          </div>
          <Heading as="h1">
            Eddy Sims<span className={styles.heart}>.</span>
          </Heading>
          <Text>
            Front end developer with over 15 years of experience. Looking to
            experiment here, and show off some of my personal work.
          </Text>
        </Container>
      </Hero>
    </Layout>
  );
}

function Heart() {
  return <span className={styles.heart}>♥️</span>;
}
