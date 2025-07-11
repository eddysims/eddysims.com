"use client";

import { usePathname } from "next/navigation";

import { ColorModeToggle } from "@/components/color-mode-toggle";
import { Container } from "@/components/ui/container";
import { routes } from "@/constants/routes";
import { useIsSticky } from "@/hooks/use-is-sticky";
import { cn } from "@/lib/utils";

import { Link } from "../ui/link";
import { Logo } from "../ui/logo";

const MENU_ITEMS = [
  {
    label: "About me",
    href: routes.about,
  },
  {
    label: "Contact",
    href: routes.contact,
  },
  {
    label: "Hire me",
    href: routes.hire,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const { isSticky, stickyRef, sentinelRef } = useIsSticky();

  return (
    <>
      <div ref={sentinelRef} />
      <div
        ref={stickyRef}
        className={cn(
          "sticky top-0 mt-2 flex h-16 items-center bg-white shadow dark:bg-gray-900",
          {
            "border-t": !isSticky,
          },
        )}
      >
        <div className={spacer} />
        <Container borderless>
          <nav className="w-full">
            <ul className="flex w-full items-center justify-end gap-8">
              <li className="mr-auto size-10">
                <Link
                  unstyled
                  href="/"
                  className={cn({
                    "text-neutral-200 dark:text-gray-700": pathname === "/",
                    "text-neutral-700 dark:text-gray-400": pathname !== "/",
                  })}
                >
                  <Logo />
                </Link>
              </li>
              {MENU_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "text-sm tracking-wide text-neutral-900 hover:text-red-600 dark:text-neutral-100 dark:hover:text-red-400",
                      {
                        "pointer-events-none text-red-500 dark:text-red-400":
                          pathname.startsWith(href),
                      },
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <NavigationItems /> */}
        </Container>
        <div className={spacer}>
          <ColorModeToggle />
        </div>
      </div>
    </>
  );
}

const spacer = cn("hidden flex-1 p-2 xl:block");
