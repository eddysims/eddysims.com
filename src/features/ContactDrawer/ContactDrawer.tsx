"use client";

import { ContactForm } from "@/features/forms/ContactForm/ContactForm";

import { Drawer } from "@/components/Drawer";

type ContactDrawerProps = {
  open: boolean;
  onRequestClose: () => void;
};

export function ContactDrawer({ open, onRequestClose }: ContactDrawerProps) {
  return (
    <Drawer open={open} onRequestClose={onRequestClose}>
      <ContactForm />
    </Drawer>
  );
}
