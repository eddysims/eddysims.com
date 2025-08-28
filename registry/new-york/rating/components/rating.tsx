"use client";

import { Star } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type RatingProps = {
  value?: number;
  /**
   * The maximum value of the rating
   *
   * @default 5
   */
  max?: number;
  hasHalves?: boolean;
  readOnly?: boolean;
  className?: string;
  onChange?: (value: number) => void;
};

export function Rating({
  max = 5,
  hasHalves,
  value,
  readOnly,
  className,
  onChange,
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number>(value ?? 0);

  const roundedStars = Math.ceil(max);
  const Comp = readOnly ? "div" : "button";

  const handleClick = (value: number) => {
    if (readOnly) {
      return;
    }

    onChange?.(value);
  };

  const handleMouseEnter = (value: number) => {
    if (readOnly) {
      return;
    }
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    if (readOnly) {
      return;
    }
    setHoverValue(value ?? 0);
  };

  return (
    <div
      className={cn(
        "text-primary flex flex-nowrap",
        "[&_[data-slot='star']]:px-0.5",
        "[&_svg]:size-6",
        "[&_[data-active='true']]:fill-current",
        !readOnly && "[&_[data-slot='star']]:cursor-pointer",
        className,
      )}
    >
      {Array.from({ length: roundedStars }).map((_, index) => {
        const starValue = index + 1;

        return (
          <div key={starValue} className="relative">
            {hasHalves && (
              <Comp
                data-slot="star"
                type="button"
                className="absolute z-10"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                onClick={() => {
                  if (readOnly) {
                    return;
                  }
                  handleClick(starValue - 0.5);
                }}
                onMouseEnter={() => handleMouseEnter(starValue - 0.5)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Star
                  data-active={hoverValue >= starValue - 0.5}
                  className={cn(
                    "fill-background stroke-current transition-colors",
                  )}
                />
              </Comp>
            )}
            <Comp
              data-slot="star"
              type="button"
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Star
                data-active={hoverValue >= starValue}
                className={cn(
                  "fill-background stroke-current transition-colors",
                )}
              />
            </Comp>
          </div>
        );
      })}
    </div>
  );
}
