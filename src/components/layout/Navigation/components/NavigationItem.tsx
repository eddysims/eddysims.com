import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cva";

import { type IconNames, Icon } from "@/components/ui/Icon";

export type NavigationItemProps = {
  label: string;
  caption: string;
  href: string;
  icon?: IconNames;
  external?: boolean;
  onClick?: () => void;
};

export function NavigationItem({
  label,
  caption,
  href,
  icon,
  external,
  onClick,
}: NavigationItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.split("/")?.[1] === href.split("/")?.[1];
  const isFile = href.endsWith(".pdf");

  const linkProps = {
    ...(external && { target: "_blank" }),
    ...(isFile && { download: true }),
    href,
    onClick,
    className: link(isActive),
  };

  const Element = isFile ? "a" : NextLink;

  return (
    <Element {...linkProps}>
      <span className="mb-0.5 flex items-center gap-2 font-semibold uppercase">
        {icon && <Icon icon={icon} size="sm" />}
        {label}
      </span>
      <span className={style_caption}>{caption}</span>
    </Element>
  );
}

const link = (isActive: boolean) =>
  cn(
    "group mx-1 block px-5 py-1 text-stone-100 outline-none transition duration-300 shadow-border-l",
    "hover:text-red-600 hover:shadow-border-l-red-600",
    "focus:text-red-600 focus:shadow-border-l-red-600",
    {
      "active text-red-600 shadow-border-l-red-600": isActive,
    },
  );

const style_caption = cn(
  "text-sm text-slate-400 transition duration-200",
  "group-hover:text-red-600 group-focus:text-red-600 group-[.active]:text-red-600",
);
