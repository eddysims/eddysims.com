import { Props, PropsWithChildren } from "react";
import { Navigation } from '../Navigation';

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
