import { PropsWithChildren } from "react";
import Head from "next/head";

import { Navigation } from "../Navigation";

import styles from "./Layout.module.css";

export interface LayoutProps {
  readonly title?: string;
  readonly description?: string;
}

export function Layout({
  title,
  description,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <div className={styles.layout}>
        <Navigation />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
}