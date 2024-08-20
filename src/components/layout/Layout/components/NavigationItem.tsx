import NextLink from "next/link";

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
  const isFile = href.endsWith(".pdf");
  const linkProps = {
    ...(external && { target: "_blank" }),
    ...(isFile && { download: true }),
    href,
    onClick,
    className: styles.link,
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
  link: cn(
    "group mx-1 block px-5 py-1 text-stone-100 outline-none transition duration-300 shadow-border-l",
    "hover:text-red-600 hover:shadow-border-l-red-600",
    "focus:text-red-600 focus:shadow-border-l-red-600",
  ),
  label: cn("mb-0.5 block flex items-center gap-2 font-semibold uppercase"),
  caption: cn(
    "text-sm text-slate-400 transition duration-200",
    "group-hover:text-red-600 group-focus:text-red-600",
  ),
};
