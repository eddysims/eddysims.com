"use client";

import { useContactDrawer } from "@/providers/ContactDrawerProvider/hooks/useContactDrawer";

import { Button, type ButtonProps } from "@/components/ui/Button";

type ContactDrawerButtonProps = Pick<ButtonProps, "label">;

export function ContactDrawerButton({ label }: ContactDrawerButtonProps) {
  const { open, setOpen } = useContactDrawer();

  const handleClick = () => setOpen(!open);

  return <Button label={label} onClick={handleClick} />;
}
