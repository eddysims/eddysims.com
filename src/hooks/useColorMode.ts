import useDarkMode from "use-dark-mode";

export function useColorMode() {
  const { toggle, value } = useDarkMode(false);

  return {
    toggle,
    theme: value ? "light" : "dark",
  };
}
