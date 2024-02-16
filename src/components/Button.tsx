"use client";

import { useState } from "react";

type ButtonProps = {
  readonly label: string;
  // readonly onClick: (data: { firstName: string }) => void;
};

export function Button({ label }: ButtonProps) {
  const [loading, setLoading] = useState<boolean>();

  const handleClick = async () => {
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setLoading(false);

    // onClick(data);
  };

  return (
    <button className="bg-primary p-5 text-white" onClick={handleClick}>
      {loading ? "Loading..." : label}
    </button>
  );
}
