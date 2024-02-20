"use client";

import { Drawer } from "@/components/Drawer";

type ContactDrawerProps = {
  open: boolean;
  onRequestClose: () => void;
};

export function ContactDrawer({ open, onRequestClose }: ContactDrawerProps) {
  return (
    <Drawer open={open} onRequestClose={onRequestClose}>
      Contact Drawer
    </Drawer>
  );
}
