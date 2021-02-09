import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout } from "~components/Layout";
import { Logo } from "~components/Logo";
import { Section } from "~components/Section";
import { Container } from "~components/Container";
import { Content } from "~components/Content";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section>
          <Container>
            <Content>
              <Logo test />
            </Content>
            <h1>Eddy Sims</h1>
            <p className={styles.large}>#YEG based software/web developer</p>
            <p>
              Web developer with over 15 years of experience. Currently helping
              to build{" "}
              <a href="https://getjobber.com" target="_blank" rel="noreferrer">
                Jobber
              </a>{" "}
              and{" "}
              <a
                href="https://atlantis.getjobber.com"
                target="_blank"
                rel="noreferrer"
              >
                Atlantis
              </a>
              . Looking to experiment here, and show off some of my personal
              work.
            </p>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export default Home;
