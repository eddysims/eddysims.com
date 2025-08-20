"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
  className?: string;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value = 0,
      onChange,
      max = 5,
      size = "md",
      readonly = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    const handleClick = (rating: number) => {
      if (!readonly && onChange) {
        onChange(rating);
      }
    };

    const handleMouseEnter = (rating: number) => {
      if (!readonly) {
        setHoverValue(rating);
      }
    };

    const handleMouseLeave = () => {
      if (!readonly) {
        setHoverValue(null);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-1",
          !readonly && "cursor-pointer",
          className,
        )}
        {...props}
      >
        {Array.from({ length: max }, (_, index) => {
          const rating = index + 1;
          const isFilled = (hoverValue ?? value) >= rating;

          return (
            <button
              key={`star-${rating}`}
              type="button"
              className={cn(
                "focus:ring-ring transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-default",
                sizeClasses[size],
                !readonly && "transition-transform hover:scale-110",
              )}
              onClick={() => handleClick(rating)}
              onMouseEnter={() => handleMouseEnter(rating)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly}
              aria-label={`Rate ${rating} out of ${max} stars`}
            >
              <svg
                className={cn(
                  "h-full w-full transition-colors",
                  isFilled
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted stroke-muted-foreground",
                )}
                viewBox="0 0 24 24"
                strokeWidth={1}
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  },
);

Rating.displayName = "Rating";

export { Rating };
