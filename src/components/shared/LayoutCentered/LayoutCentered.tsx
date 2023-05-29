import { PropsWithChildren } from "react";

import { Layout, LayoutProps } from "@/components/shared/Layout";

export function LayoutCentered({
  children,
  ...rest
}: PropsWithChildren<LayoutProps>) {
  return (
    <Layout {...rest}>
      <div className="flex-1 flex items-center">{children}</div>
    </Layout>
  );
}
