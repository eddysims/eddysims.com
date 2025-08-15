import { Rating } from "@/components/ui/rating";

export function Demo() {
  return (
    <div className="flex items-center justify-center h-full">
      <Rating value={3} readonly />
    </div>
  );
}
