"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type HoverTextProps = React.ComponentProps<"span"> & {
  content: string;
  initialized?: boolean;
};

function HoverText({ content, initialized = true, ...props }: HoverTextProps) {
  return (
    <span {...props}>
      {content.split("").map((char: string, index: number) => (
        <HoverTextItem key={index + char} initialized={initialized}>
          {char}
        </HoverTextItem>
      ))}
    </span>
  );
}

const COLORS = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

type HoverItemColors = (typeof COLORS)[number];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

function HoverTextItem({
  children,
  initialized,
}: React.PropsWithChildren<Pick<HoverTextProps, "initialized">>) {
  const [color, setColor] = React.useState<HoverItemColors | undefined>();

  React.useEffect(() => {
    if (initialized) {
      setColor(getRandomColor());
    }
  }, [initialized]);

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={cn(
        "transition-colors duration-300",
        !color && initialized && "animate-pulse",
        {
          "text-red-700 dark:text-red-300": color === "red",
          "text-orange-700 dark:text-orange-300": color === "orange",
          "text-amber-700 dark:text-amber-300": color === "amber",
          "text-yellow-700 dark:text-yellow-300": color === "yellow",
          "text-lime-700 dark:text-lime-300": color === "lime",
          "text-green-700 dark:text-green-300": color === "green",
          "text-emerald-700 dark:text-emerald-300": color === "emerald",
          "text-teal-700 dark:text-teal-300": color === "teal",
          "text-cyan-700 dark:text-cyan-300": color === "cyan",
          "text-sky-700 dark:text-sky-300": color === "sky",
          "text-blue-700 dark:text-blue-300": color === "blue",
          "text-indigo-700 dark:text-indigo-300": color === "indigo",
          "text-violet-700 dark:text-violet-300": color === "violet",
          "text-purple-700 dark:text-purple-300": color === "purple",
          "text-fuchsia-700 dark:text-fuchsia-300": color === "fuchsia",
          "text-pink-700 dark:text-pink-300": color === "pink",
          "text-rose-700 dark:text-rose-300": color === "rose",
        },
      )}
    >
      {children}
    </span>
  );
}

export { HoverText };
