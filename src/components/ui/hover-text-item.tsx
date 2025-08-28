"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { getRandomColor, type Colors } from "@/utils/get-random-color";

type HoverTextItemProps = {
  initialColor: Colors;
};

export function HoverTextItem({
  initialColor,
  children,
}: React.PropsWithChildren<HoverTextItemProps>) {
  const [color, setColor] = React.useState<Colors | undefined>(initialColor);

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={cn(
        "transition-colors duration-300",
        !color && "animate-pulse",
        {
          "text-red-500 dark:text-red-300": color === "red",
          "text-orange-500 dark:text-orange-300": color === "orange",
          "text-amber-500 dark:text-amber-300": color === "amber",
          "text-yellow-500 dark:text-yellow-300": color === "yellow",
          "text-lime-500 dark:text-lime-300": color === "lime",
          "text-green-500 dark:text-green-300": color === "green",
          "text-emerald-500 dark:text-emerald-300": color === "emerald",
          "text-teal-500 dark:text-teal-300": color === "teal",
          "text-cyan-500 dark:text-cyan-300": color === "cyan",
          "text-sky-500 dark:text-sky-300": color === "sky",
          "text-blue-500 dark:text-blue-300": color === "blue",
          "text-indigo-500 dark:text-indigo-300": color === "indigo",
          "text-violet-500 dark:text-violet-300": color === "violet",
          "text-purple-500 dark:text-purple-300": color === "purple",
          "text-fuchsia-500 dark:text-fuchsia-300": color === "fuchsia",
          "text-pink-500 dark:text-pink-300": color === "pink",
          "text-rose-500 dark:text-rose-300": color === "rose",
        },
      )}
    >
      {children}
    </span>
  );
}
