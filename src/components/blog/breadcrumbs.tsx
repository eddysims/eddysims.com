"use client";
import { usePathname } from "next/navigation";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import type { PageTree } from "fumadocs-core/server";
import { Fragment } from "react";
import Link from "next/link";

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
    <div className="-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-fd-muted-foreground">
      {prefix && (
        <>
          <Link
            href={prefix.href}
            className="truncate hover:text-fd-accent-foreground"
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
              className="truncate hover:text-fd-accent-foreground"
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
