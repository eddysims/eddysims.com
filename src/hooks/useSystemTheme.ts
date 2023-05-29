import { useRef, useState } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type ColorModes = "light" | "dark";

export function useSystemTheme(defaultMode: ColorModes) {
  const [mode, setMode] = useState<ColorModes>(defaultMode);
  const isMounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (isMounted.current) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setMode("dark")
      : setMode("light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";

        setMode(colorScheme);
      });
    isMounted.current = true;
  }, []);

  return mode;
}
