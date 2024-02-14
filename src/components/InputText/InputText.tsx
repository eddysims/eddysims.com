import clsx from "clsx";
import { useId } from "react";

import { ErrorMessage } from "@/components/ErrorMessage";
import { InputLabel } from "@/components/InputLabel";

import { useForm } from "@/hooks/useForm";

type InputTextProps = {
  label?: string;
  name?: string;
  required?: boolean;
};

export function InputText({ label, name, required }: InputTextProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const uid = useId();
  const id = uid.replaceAll(":", "");

  const requiredError = errors?.[name ?? id]?.type === "required";

  const inputClass = clsx("bg-white border border-surface  rounded-md p-2", {
    "border-red-500": requiredError,
    "border-gray-300": !requiredError,
  });

  return (
    <div className="grid gap-1">
      {label && <InputLabel label={label} htmlFor={id} />}
      <input
        className={inputClass}
        type="text"
        id={id}
        {...register(name ?? id, { required })}
      />
      {requiredError && <ErrorMessage message="This field is required" />}
    </div>
  );
}
