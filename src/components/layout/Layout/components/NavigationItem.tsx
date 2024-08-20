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
    className: styles.link(isActive && !external),
  };

  const Tag = isFile ? "a" : NextLink;

  return (
    <Tag {...linkProps}>
      <span className={styles.label}>
        {icon && <Icon icon={icon} size="sm" />}
        {label}
      </span>
      <span className={styles.caption}>{caption}</span>
    </Tag>
  );
}

const styles = {
  link: (isActive: boolean) =>
    cn(
      "group mx-1 block px-5 py-1 text-stone-100 outline-none transition duration-300 shadow-border-l",
      "hover:text-red-600 hover:shadow-border-l-red-600",
      "focus:text-red-600 focus:shadow-border-l-red-600",
      {
        "active text-red-600 shadow-border-l-red-600": isActive,
      },
    ),
  label: cn("mb-0.5 block flex items-center gap-2 font-semibold uppercase"),
  caption: cn(
    "text-sm text-slate-400 transition duration-200",
    "group-hover:text-red-600 group-focus:text-red-600 group-[.active]:text-red-600",
  ),
};
