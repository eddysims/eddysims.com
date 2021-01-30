import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <h1>Eddy Sims</h1>
        <p className={styles.large}>#YEG based software/web developer</p>
        <div style={{ marginTop: "1rem" }}>
          <p>
            Web developer with over 15 years of experience. Currently helping to
            build{" "}
            <a href="https://getjobber.com" target="_blank">
              Jobber
            </a>{" "}
            and{" "}
            <a href="https://atlantis.getjobber.com" target="_blank">
              Atlantis
            </a>
            . Looking to experiment here, and show off some of my personal work.
          </p>
        </div>
      </main>
    </div>
  );
}
