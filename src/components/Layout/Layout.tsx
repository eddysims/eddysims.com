import { PropsWithChildren } from "react";
import Head from "next/head";

import { Header } from "@/components/Header";

import styles from "./Layout.module.css";

export interface LayoutProps {
  readonly title?: string;
  readonly description?: string;
}

export function Layout({
  title = "Eddy Sims | Front End Developer",
  description,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
