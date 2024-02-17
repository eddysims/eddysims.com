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
    // await fetch("https://eddysims.com/api/send", {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    // setLoading(false);

    // onClick(data);
  };

  return (
    <button className="bg-primary p-5 text-white" onClick={handleClick}>
      {loading ? "Loading..." : label}
    </button>
  );
}
