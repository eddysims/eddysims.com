import Head from "next/head";

import { Heading } from "@pids/components/Heading";
import { Text } from "@pids/components/Text";
import { Container } from "@pids/components/Container";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Eddy Sims</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Container>
          <Heading as="h1">
            Eddy Sims<span className={styles.color}>.</span>
          </Heading>
          <Text size="large">#YEG based software/web developer</Text>
          <Text>
            Web developer with over 15 years of experience. Currently helping to
            build Jobber and Atlantis. Looking to experiment here, and show off
            some of my personal work.
          </Text>
        </Container>
      </div>
    </>
  );
}

export default Home;
