"use client";

import { useState } from "react";

type ButtonProps = {
  readonly label: string;
};

export function Button({ label }: ButtonProps) {
  const [loading, setLoading] = useState<boolean>();
  const handleClick = async () => {
    console.log("Clicked");
    setLoading(true);

    await fetch("/api/send", {
      method: "POST",
    });
  };

  return <button onClick={handleClick}>{loading ? "loading" : label}</button>;
}
