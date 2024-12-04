import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cva";

import { Icon, type IconNames } from "@/components/ui/Icon";

export type NavigationItemProps = {
  label: string;
  href: string;
  caption: string;
  icon?: IconNames;
  onClick?: () => void;
};

export function NavigationItem({
  label,
  href,
  caption,
  icon,
  onClick,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = () => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };
  const isExternal = href.startsWith("http");
  const isFile = href.endsWith(".pdf");

  const conditionalProps = {
    ...(isExternal && { target: "_blank" }),
    ...(isExternal && { rel: "noreferrer" }),
    ...(isFile && { download: true }),
  };

  const Element = isFile ? "a" : Link;

  return (
    <Element
      className={link(isActive())}
      href={href}
      onClick={onClick}
      {...conditionalProps}
    >
      <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
        {icon && <Icon icon={icon} size="sm" />}
        {label}
      </span>
      <span className="text-sm font-semibold tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-red-600 group-[.active]:text-red-600">
        {caption}
      </span>
    </Element>
  );
}

const link = (isActive: boolean) =>
  cn(
    "group grid gap-1 border-l-4 border-red-600 px-4 py-1.5 transition-colors duration-300",
    "hover:border-red-600 hover:text-red-600",
    {
      "active border-red-600 text-red-600": isActive,
      "border-transparent text-white": !isActive,
    },
  );
