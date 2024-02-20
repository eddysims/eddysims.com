"use client";

import { useContactDrawer } from "@/providers/ContactDrawerProvider/ContactDrawerProvider";

import { Button } from "@/components/Button";
import type { ButtonProps } from "@/components/Button";

type ToggleButtonProps = Pick<ButtonProps, "label">;

export function ToggleButton({ label }: ToggleButtonProps) {
  const { open, setOpen } = useContactDrawer();

  const handleClick = () => {
    setOpen(!open);
  };

  return <Button onClick={handleClick} label={label} />;
}
