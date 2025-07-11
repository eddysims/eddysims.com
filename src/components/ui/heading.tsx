import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "text-[clamp(3rem,10vw,6rem)]",
      h2: "text-[clamp(1.5rem,5vw,2rem)]",
      h3: "text-[clamp(1.25rem,3vw,1.5rem)]",
      accent: "text-xl font-normal",
    },
  },
});

type HeadingVariants = VariantProps<typeof headingVariants>["variant"];

type HeadingProps = {
  as?: Extract<HeadingVariants, "h1" | "h2">;
  className?: string;
} & VariantProps<typeof headingVariants>;

export function Heading({
  as: Tag = "h2",
  variant,
  className,
  children,
}: React.PropsWithChildren<HeadingProps>) {
  return (
    <Tag
      className={cn(headingVariants({ variant: variant ?? Tag }), className)}
    >
      {children}
    </Tag>
  );
}
