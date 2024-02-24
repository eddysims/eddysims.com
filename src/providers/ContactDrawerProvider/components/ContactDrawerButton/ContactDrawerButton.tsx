"use client";

import { useContactDrawer } from "@/providers/ContactDrawerProvider/hooks/useContactDrawer";

import { Button } from "@/components/common/Button";
import type { ButtonProps } from "@/components/common/Button";

type ContactDrawerButtonProps = Pick<ButtonProps, "label">;

export function ContactDrawerButton({ label }: ContactDrawerButtonProps) {
  const { open, setOpen } = useContactDrawer();

  const handleClick = () => setOpen(!open);

  return <Button label={label} onClick={handleClick} />;
}
