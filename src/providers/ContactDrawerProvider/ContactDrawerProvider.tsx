"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { Drawer } from "@/components/common/Drawer";
import { ContactForm } from "@/components/forms/ContactForm";

type ContactDrawerContextProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ContactDrawerContext = createContext<
  ContactDrawerContextProps | undefined
>(undefined);

export function ContactDrawerProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <ContactDrawerContext.Provider value={{ open, setOpen }}>
      {children}
      <Drawer open={open} onRequestClose={handleClose}>
        <ContactForm />
      </Drawer>
    </ContactDrawerContext.Provider>
  );
}
