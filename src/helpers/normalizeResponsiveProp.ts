import { NormalizedResponsiveProp, ResponsiveProp } from "@/types";

export function normalizeResponsiveProp<T extends boolean | string | number>(
  prop: ResponsiveProp<T>
): NormalizedResponsiveProp<T> {
  if (typeof prop === "object") {
    return prop;
  }

  return { mobile: prop, tablet: prop, desktop: prop };
}
