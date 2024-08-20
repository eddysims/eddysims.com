import { cn } from "@/utils/cva";

import { Container } from "@/components/ui/Container";

import { Navigation } from "./components/Navigation";

import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <main className={styles.main}>
        <Container className={styles.container}>{children}</Container>
      </main>
    </div>
  );
}

const styles = {
  wrapper: cn("flex"),
  main: cn("flex min-h-dvh flex-1 flex-col items-center justify-center"),
  container: cn("min-h-full"),
};
