"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/components/ui/link";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

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
    special: true,
  },
];

export function NavigationItems() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex w-full justify-end gap-6">
        {MENU_ITEMS.map(({ label, href, special }) => (
          <li key={href}>
            <Link
              href={href}
              unstyled
              className={menuItem(special, pathname === href)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const menuItem = (special?: boolean, active?: boolean) =>
  cn(
    "hover:text-primary relative inline-flex py-3 tracking-wide lowercase",
    "before:bg-primary after:bg-primary before:absolute before:-bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:origin-center before:transition-[width] before:duration-300 before:ease-in-out after:absolute after:right-1/2 after:-bottom-0 after:h-0.5 after:w-0 after:origin-center after:transition-[width] after:duration-300 after:ease-in-out hover:before:w-1/3 hover:after:w-1/3",
    {
      "font-bold": special,
    },
    {
      "pointer-events-none before:w-1/3 after:w-1/3": active,
    },
  );
