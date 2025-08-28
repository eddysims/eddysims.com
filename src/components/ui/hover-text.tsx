import { HoverTextItem } from "@/components/ui/hover-text-item";
import { getRandomColor } from "@/utils/get-random-color";

import type * as React from "react";

type HoverTextProps = React.ComponentProps<"span"> & {
  content: string;
  initialized?: boolean;
};

function HoverText({ content, ...props }: HoverTextProps) {
  return (
    <span {...props}>
      {content.split("").map((char: string, index: number) => (
        <HoverTextItem key={index + char} initialColor={getRandomColor()}>
          {char}
        </HoverTextItem>
      ))}
    </span>
  );
}

export { HoverText };
