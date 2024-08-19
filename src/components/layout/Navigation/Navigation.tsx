"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/common/Icon";

export function Navigation() {
  const path = usePathname();

  const className = clsx(
    "flex items-center gap-2 uppercase text-primary tracking-wide font-bold",
    "hover:underline",
  );

  return (
    <header className=" text-red-600">
      <nav id="main-navigation">
        <ul className="flex gap-8 p-8">
          {path !== "/" && (
            <li>
              <NextLink href="/contact" className={className}>
                Contact
              </NextLink>
            </li>
          )}
          <li>
            <NextLink
              href="/pdfs/Eddy Sims - Resume.pdf"
              target="_blank"
              download
              locale={false}
              className={className}
              aria-label="Download my resumé"
            >
              <Icon icon="paperclip" size="sm" />
              Resumé
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
