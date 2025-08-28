"use client";

import { Rating } from "@/components/ui/rating";

export default function Readonly() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Rating value={3} className="text-amber-500" />
        <Rating
          value={1}
          hasHalves
          className="text-amber-500 [&_svg]:size-8 [&_svg]:fill-amber-100"
        />
        <Rating value={3} className="[&_[data-slot='star']]:px-2" />
        <Rating value={3} className="[&_svg]:size-10" />
      </div>
    </div>
  );
}
