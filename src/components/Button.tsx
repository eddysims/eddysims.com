"use client";

type ButtonProps = {
  readonly label: string;
};

export function Button({ label }: ButtonProps) {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>{label}</button>;
}
