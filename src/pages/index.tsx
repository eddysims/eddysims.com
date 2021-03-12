import Head from "next/head";

import { IndexHero, IndexProjects } from "~components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Sims</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexHero />
      {/* <IndexProjects /> */}
    </>
  );
}
