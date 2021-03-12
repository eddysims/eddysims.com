import Head from "next/head";

import { IndexHero } from "~components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Sims</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexHero />
    </>
  );
}
