"use client";

type ButtonProps = {
  readonly label: string;
  readonly onClick: (data: { firstName: string }) => void;
};

export function Button({ label, onClick }: ButtonProps) {
  const handleClick = () => {
    const data = {
      firstName: "Eddy",
    };

    onClick(data);
  };

  return (
    <button className="bg-primary p-5 text-white" onClick={handleClick}>
      {label}
    </button>
  );
}
