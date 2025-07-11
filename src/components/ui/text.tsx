import { cn } from "@/lib/utils";

type TextProps = {
  size?: "sm" | "base" | "lg";
};

export function Text({
  children,
  size = "base",
}: React.PropsWithChildren<TextProps>) {
  return (
    <p
      className={cn(
        "mb-4 leading-relaxed text-neutral-800 last:mb-0 dark:text-neutral-100",
        {
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
        },
      )}
    >
      {children}
    </p>
  );
}
