"use client";

import { Rating } from "@/components/ui/rating";

export default function Readonly() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Rating value={3.5} readOnly />
    </div>
  );
}
