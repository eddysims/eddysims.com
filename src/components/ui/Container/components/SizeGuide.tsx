import { cn } from "@/utils/cva";

export function SizeGuide() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className={wrapper}>
      <span className="@xs:hidden">0</span>
      <span className="hidden @xs:inline @sm:hidden">xs</span>
      <span className="hidden @sm:inline @md:hidden">sm</span>
      <span className="hidden @md:inline @lg:hidden">md</span>
      <span className="hidden @lg:inline @xl:hidden">lg</span>
      <span className="hidden @xl:inline @2xl:hidden">xl</span>
      <span className="hidden @2xl:inline @3xl:hidden">2xl</span>
      <span className="hidden @3xl:inline @4xl:hidden">3xl</span>
      <span className="hidden @4xl:inline @5xl:hidden">4xl</span>
      <span className="hidden @5xl:inline @6xl:hidden">5xl</span>
      <span className="hidden @6xl:inline @7xl:hidden">6xl</span>
      <span className="hidden @7xl:inline">7xl</span>
    </div>
  );
}

const wrapper = cn(
  "absolute flex size-9 items-center justify-center text-xs",
  "bg-cyan-100 @xs:bg-rose-400 @sm:bg-teal-500 @md:bg-fuchsia-500 @lg:bg-lime-500 @xl:bg-red-500 @2xl:bg-yellow-500 @3xl:bg-pink-500 @4xl:bg-indigo-500 @5xl:bg-emerald-500 @6xl:bg-sky-300 @7xl:bg-violet-300",
);
