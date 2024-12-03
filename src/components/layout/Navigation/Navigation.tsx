"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/utils/cva";

import { SocialLinks } from "@/components/social/SocialLinks";
import { Icon } from "@/components/ui/Icon";

import {
  NavigationItem,
  type NavigationItemProps,
} from "./components/NavigationItem";

const items: NavigationItemProps[] = [
  {
    label: "Eddy Sims",
    caption: "Software Engineer",
    href: "/",
  },
  {
    label: "Blog",
    caption: "Explore my writings",
    href: "/blog",
  },
  {
    label: "Contact Me",
    caption: "Come say hi!",
    href: "/contact",
  },
  {
    label: "Resume",
    caption: "Download it here",
    href: "/pdfs/Eddy-Sims_Resume.pdf",
    icon: "attachment-line",
  },
  {
    label: "Storybook",
    caption: "Over engineering required",
    href: "https://storybook.eddysims.com/",
    external: true,
  },
];

export function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={nav(isOpen)}>
      <div className="mx-5">
        <button
          type="button"
          aria-label="Toggle navigation"
          className={toggle(isOpen)}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon icon={isOpen ? "close-line" : "menu-line"} size="lg" />
        </button>
        <NextLink
          href="/"
          aria-label="Go to the homepage"
          className={readonlyIcon}
        >
          <Icon icon="menu-line" size="lg" />
        </NextLink>
      </div>
      <ul className="grid gap-12">
        {items.map((item) => (
          <li key={item.href}>
            <NavigationItem {...item} />
          </li>
        ))}
      </ul>

      {pathname !== "/" && (
        <>
          <hr className="mx-5 my-8 border-t border-slate-800 3xl:mx-0" />
          <div className="mx-5">
            <SocialLinks />
          </div>
        </>
      )}
    </nav>
  );
}

const nav = (isOpen: boolean) =>
  cn(
    "fixed top-0 z-50 flex h-dvh min-h-dvh w-full flex-col justify-center bg-slate-900/90 backdrop-blur transition-transform duration-300",
    "md:w-80 md:border-r md:border-slate-800",
    "lg:sticky lg:w-72 lg:border-0 lg:bg-transparent",
    "3xl:border-r",
    {
      "-translate-x-full lg:translate-x-0": !isOpen,
      "translate-x-0": isOpen,
    },
  );

const toggle = (isOpen: boolean) =>
  cn("absolute top-12", "lg:hidden", {
    "-right-12": !isOpen,
    "left-6": isOpen,
  });

const readonlyIcon = cn(
  "hidden rounded text-slate-700 outline-none",
  "lg:absolute lg:-mt-20 lg:inline-block",
  "focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900",
);
