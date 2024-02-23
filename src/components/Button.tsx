"use client";

type ButtonProps = {
  readonly label: string;
  readonly onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick?.();
  };

  return <button onClick={handleClick}>{label}</button>;
}
