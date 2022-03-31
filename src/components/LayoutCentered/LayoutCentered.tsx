import { Layout, LayoutProps } from "@/components/Layout";
import { PropsWithChildren } from "react";

import styles from "./LayoutCentered.module.css";

export function LayoutCentered({
  children,
  ...rest
}: PropsWithChildren<LayoutProps>) {
  return (
    <Layout {...rest}>
      <div className={styles.content}>{children}</div>
    </Layout>
  );
}
