import { cn } from "@/utils/cva";

import { Icon } from "@/components/ui/Icon";

import type { MouseEvent } from "react";

type CloseButtonProps = {
  onClick: (e: MouseEvent<HTMLElement>) => void;
  className: string;
};

export function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex size-6 min-w-6 items-center justify-center rounded-full outline-none ring-offset-1 transition-colors focus:ring-1",
        className,
      )}
    >
      <Icon icon="close-line" size="sm" />
    </button>
  );
}
