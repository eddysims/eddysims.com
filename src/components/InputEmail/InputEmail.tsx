import clsx from "clsx";
import { useId } from "react";

import { ErrorMessage } from "@/components/ErrorMessage";
import { InputLabel } from "@/components/InputLabel";

import { useForm } from "@/hooks/useForm";

type InputEmailProps = {
  label?: string;
  name?: string;
  required?: boolean;
};

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function InputEmail({ label, name, required }: InputEmailProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const uid = useId();
  const id = uid.replaceAll(":", "");

  const requiredError = errors?.[name ?? id]?.type === "required";
  const error = errors?.[name ?? id];

  const inputClass = clsx("bg-white border border-surface  rounded-md p-2", {
    "border-red-500": requiredError,
    "border-gray-300": !requiredError,
  });

  return (
    <div className="grid gap-1">
      {label && <InputLabel label={label} htmlFor={id} />}
      <input
        className={inputClass}
        type="email"
        id={id}
        {...register(name ?? id, {
          required: {
            value: required ?? false,
            message: "This field is required",
          },
          pattern: {
            value: emailRegex,
            message: "Entered value does not match email format",
          },
        })}
      />
      {error?.message && <ErrorMessage message={error.message.toString()} />}
    </div>
  );
}
