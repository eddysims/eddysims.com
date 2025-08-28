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
  className?: string;
  onChange?: (value: number) => void;
};

export function Rating({
  max = 5,
  hasHalves,
  value,
  className,
  onChange,
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number>(value ?? 0);
  const roundedStars = Math.ceil(max);

  const handleClick = (value: number) => {
    onChange?.(value);
  };

  return (
    <div
      className={cn(
        "flex flex-nowrap",
        "[&_[data-slot='star']]:text-primary [&_[data-slot='star']]:cursor-pointer [&_[data-slot='star']]:px-0.5",
        "[&_svg]:size-6",
        className,
      )}
    >
      {Array.from({ length: roundedStars }).map((_, index) => {
        const starValue = index + 1;

        return (
          <div key={starValue} className="relative">
            {hasHalves && (
              <button
                data-slot="star"
                type="button"
                className="absolute z-10"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                onClick={() => handleClick(starValue - 0.5)}
                onMouseEnter={() => setHoverValue(starValue - 0.5)}
                onMouseLeave={() => setHoverValue(value ?? 0)}
              >
                <Star
                  className={cn("stroke-current transition-colors", {
                    "fill-current": hoverValue >= starValue - 0.5,
                  })}
                />
              </button>
            )}
            <button
              data-slot="star"
              type="button"
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => setHoverValue(starValue)}
              onMouseLeave={() => setHoverValue(value ?? 0)}
            >
              <Star
                className={cn("stroke-current transition-colors", {
                  "fill-current": hoverValue >= starValue,
                })}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
