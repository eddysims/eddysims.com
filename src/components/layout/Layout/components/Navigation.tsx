"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/utils/cva";

import { SocialLinks } from "@/components/social/SocialLinks";
import { Icon } from "@/components/ui/Icon";

import { NavigationItem, type NavigationItemProps } from "./NavigationItem";

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

  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav(open)}>
      <div className={styles.icon.wrapper}>
        <button
          type="button"
          aria-label="Toggle navigation"
          className={styles.icon.button(open)}
          onClick={() => setOpen(!open)}
        >
          <Icon icon={open ? "close-line" : "menu-line"} size="lg" />
        </button>
        <NextLink
          href="/"
          aria-label="Go to the homepage"
          className={styles.icon.readonly}
        >
          <Icon icon="menu-line" size="lg" />
        </NextLink>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <NavigationItem
              {...item}
              onClick={() => {
                setOpen(false);
                item.onClick?.();
              }}
            />
          </li>
        ))}
      </ul>

      {pathname !== "/" && (
        <>
          <hr className={styles.divider} />
          <div className={styles.social}>
            <SocialLinks />
          </div>
        </>
      )}
    </nav>
  );
}

const styles = {
  nav: (open: boolean) =>
    cn(
      "fixed top-0 z-50 flex h-dvh min-h-dvh w-full flex-col justify-center bg-slate-900/90 backdrop-blur transition-transform duration-300",
      "md:max-w-xs md:border-r md:border-slate-800",
      "lg:sticky lg:-mt-20 lg:w-72 lg:border-0 lg:bg-transparent",
      "3xl:border-r",
      {
        "-translate-x-full lg:translate-x-0": !open,
        "translate-x-0": open,
      },
    ),
  icon: {
    wrapper: cn("mx-5 mb-16"),
    button: (open: boolean) =>
      cn("absolute top-12", "lg:hidden", {
        "-right-11": !open,
        "left-5": open,
      }),
    readonly: cn(
      "hidden rounded text-slate-700 outline-none",
      "lg:inline-block",
      "focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900",
    ),
  },
  list: cn("grid gap-12"),

  divider: cn("mx-5 my-8 border-t border-slate-800", "3xl:mx-0"),
  social: cn("mx-5"),
};
