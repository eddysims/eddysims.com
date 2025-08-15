import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "wavy-line mx-auto w-full px-4 md:max-w-2xl lg:max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
