import { Rating } from "@/components/ui/rating";

export default function Demo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Rating value={3} readonly />
    </div>
  );
}
