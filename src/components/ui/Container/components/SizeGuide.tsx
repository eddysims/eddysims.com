import { cn } from "@/utils/cva";

export function SizeGuide() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className={styles?.checker?.wrapper}>
      <span className={styles?.checker?.zero}>0</span>
      <span className={styles?.checker?.xs}>xs</span>
      <span className={styles?.checker?.sm}>sm</span>
      <span className={styles?.checker?.md}>md</span>
      <span className={styles?.checker?.lg}>lg</span>
      <span className={styles?.checker?.xl}>xl</span>
      <span className={styles.checker?.["2xl"]}>2xl</span>
      <span className={styles.checker?.["3xl"]}>3xl</span>
      <span className={styles.checker?.["4xl"]}>4xl</span>
      <span className={styles.checker?.["5xl"]}>5xl</span>
      <span className={styles.checker?.["6xl"]}>6xl</span>
      <span className={styles.checker?.["7xl"]}>7xl</span>
    </div>
  );
}

const styles = {
  ...(process.env.NODE_ENV === "development" && {
    checker: {
      wrapper: cn(
        "absolute flex size-9 items-center justify-center text-xs",
        "bg-cyan-100 @xs:bg-rose-400 @sm:bg-teal-500 @md:bg-fuchsia-500 @lg:bg-lime-500 @xl:bg-red-500 @2xl:bg-yellow-500 @3xl:bg-pink-500 @4xl:bg-indigo-500 @5xl:bg-emerald-500 @6xl:bg-sky-300 @7xl:bg-violet-300",
      ),
      zero: cn("@xs:hidden"),
      xs: cn("hidden @xs:inline @sm:hidden"),
      sm: cn("hidden @sm:inline @md:hidden"),
      md: cn("hidden @md:inline @lg:hidden"),
      lg: cn("hidden @lg:inline @xl:hidden"),
      xl: cn("hidden @xl:inline @2xl:hidden"),
      "2xl": cn("hidden @2xl:inline @3xl:hidden"),
      "3xl": cn("hidden @3xl:inline @4xl:hidden"),
      "4xl": cn("hidden @4xl:inline @5xl:hidden"),
      "5xl": cn("hidden @5xl:inline @6xl:hidden"),
      "6xl": cn("hidden @6xl:inline @7xl:hidden"),
      "7xl": cn("hidden @7xl:inline"),
    },
  }),
};
