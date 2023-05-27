import NextHead from "next/head";
import { PropsWithChildren } from "react";

import { MainNavigation } from "../MainNavigation";

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
      <NextHead>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </NextHead>

      <div className="max-w-7xl mx-auto bg-surface min-h-screen flex flex-col">
        <MainNavigation />
        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </>
  );
}
