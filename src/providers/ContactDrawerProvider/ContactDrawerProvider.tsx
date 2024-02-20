"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

import { ContactDrawer } from "@/features/ContactDrawer";

type ContactDrawerContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ContactDrawerContext = createContext<
  ContactDrawerContextProps | undefined
>(undefined);

export function ContactDrawerProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const value = { open, setOpen };

  return (
    <ContactDrawerContext.Provider value={value}>
      {children}
      <ContactDrawer open={open} onRequestClose={() => setOpen(false)} />
    </ContactDrawerContext.Provider>
  );
}

export const useContactDrawer = () => {
  const context = useContext(ContactDrawerContext);

  if (context === undefined) {
    throw new Error(
      "useContactDrawer must be used within a ContactDrawerProvider",
    );
  }

  return context;
};
