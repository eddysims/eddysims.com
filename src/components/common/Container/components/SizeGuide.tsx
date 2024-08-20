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
        "@xs:bg-rose-400 @sm:bg-teal-500 @md:bg-fuchsia-500 @lg:bg-lime-500 @xl:bg-red-500 @2xl:bg-yellow-500 @3xl:bg-pink-500 @4xl:bg-indigo-500 @5xl:bg-emerald-500 @6xl:bg-sky-300 @7xl:bg-violet-300 bg-cyan-100",
      ),
      zero: cn("@xs:hidden"),
      xs: cn("@xs:inline @sm:hidden hidden"),
      sm: cn("@sm:inline @md:hidden hidden"),
      md: cn("@md:inline @lg:hidden hidden"),
      lg: cn("@lg:inline @xl:hidden hidden"),
      xl: cn("@xl:inline @2xl:hidden hidden"),
      "2xl": cn("@2xl:inline @3xl:hidden hidden"),
      "3xl": cn("@3xl:inline @4xl:hidden hidden"),
      "4xl": cn("@4xl:inline @5xl:hidden hidden"),
      "5xl": cn("@5xl:inline @6xl:hidden hidden"),
      "6xl": cn("@6xl:inline @7xl:hidden hidden"),
      "7xl": cn("@7xl:inline hidden"),
    },
  }),
};
