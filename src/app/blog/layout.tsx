import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { baseOptions } from "@/app/layout.config";
import { blog } from "@/lib/source";

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={blog.pageTree}
      {...baseOptions}
      nav={{ ...baseOptions.nav, mode: "top" }}
    >
      {children}
    </DocsLayout>
  );
}
