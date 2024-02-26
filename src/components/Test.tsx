"use client";

import { useState } from "react";

import { useToast } from "@/providers/ToastProvider/hooks/useToast";

import type { Toast } from "@/providers/ToastProvider/ToastProvider";

export function Test() {
  const [status, setStatus] = useState<Toast["variation"]>("success");
  const [value, setValue] = useState<string>("");
  const toast = useToast();

  const handleClick = () => {
    toast({ message: value, variation: status });
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="status"
          value="success"
          checked={status === "success"}
          onChange={() => setStatus("success")}
        />{" "}
        Success
      </div>
      <div>
        <input
          type="radio"
          name="status"
          value="error"
          checked={status === "error"}
          onChange={() => setStatus("error")}
        />{" "}
        Error
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button onClick={handleClick}>Toast Me</button>
    </div>
  );
}
