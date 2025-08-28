"use client";

import { useState } from "react";

import { Rating } from "@/components/ui/rating";

export default function Basic() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Rating value={value} hasHalves onChange={setValue} />

      <p className="mt-4 text-sm">Value: {value}</p>
    </div>
  );
}
