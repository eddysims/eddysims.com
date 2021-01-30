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
        <h1 className={styles.title}>Eddy Sims</h1>
        <p className={styles.description}>#YEG based software/web developer</p>
        <div style={{ marginTop: "1rem" }}>
          <p>Web developer with over 15 years of experience.</p>
          <p>
            Currently helping to build{" "}
            <a href="https://getjobber.com" target="_blank">
              Jobber
            </a>{" "}
            and <a href="https://atlantis.getjobber.com">Atlantis</a>.
          </p>
          <p>
            Looking to experiment here, and show off some of my personal work.
          </p>
        </div>
      </main>
    </div>
  );
}
