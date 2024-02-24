import { useContext } from "react";

import { ContactDrawerContext } from "@/providers/ContactDrawerProvider/ContactDrawerProvider";

export function useContactDrawer() {
  const context = useContext(ContactDrawerContext);

  if (!context) {
    throw new Error(
      "useContactDrawer must be used within a ContactDrawerProvider",
    );
  }

  return context;
}
