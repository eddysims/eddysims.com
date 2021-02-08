import { PropsWithChildren } from "react";
import { Navigation } from '~components/Navigation';

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
    </>
  )
}
