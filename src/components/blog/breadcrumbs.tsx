"use client";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import type { PageTree } from "fumadocs-core/server";

type BreadcrumbProps = {
  tree: PageTree.Root;
  prefix?: {
    href: string;
    label: string;
  };
};

export function Breadcrumb({ tree, prefix }: BreadcrumbProps) {
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, tree);

  if (items.length === 0) return null;

  return (
    <div className="text-fd-muted-foreground -mb-3 flex flex-row items-center gap-1 text-sm font-medium">
      {prefix && (
        <>
          <Link
            href={prefix.href}
            className="hover:text-fd-accent-foreground truncate"
          >
            {prefix.label}
          </Link>{" "}
          /
        </>
      )}
      {items.map((item, i) => (
        <Fragment key={i}>
          {i !== 0 && <span className="text-fd-muted-foreground">/</span>}
          {item.url ? (
            <Link
              href={item.url}
              className="hover:text-fd-accent-foreground truncate"
            >
              {item.name}
            </Link>
          ) : (
            <span className="truncate">{item.name}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
