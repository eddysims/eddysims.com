"use client";

type ButtonProps = {
  readonly label: string;
};

export function Button({ label }: ButtonProps) {
  const handleClick = async () => {
    console.log("Clicked");
  };

  return (
    <button className="bg-primary p-5 text-white" onClick={handleClick}>
      {label}
    </button>
  );
}
