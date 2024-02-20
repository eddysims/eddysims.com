import clsx from "clsx";
import { useId } from "react";
import { RegisterOptions } from "react-hook-form";

import { ErrorMessage } from "@/components/ErrorMessage";
import { InputLabel } from "@/components/InputLabel";

import { useForm } from "@/hooks/useForm";

export type InputFieldProps = {
  readonly type: "text" | "email";
  readonly label?: string;
  readonly name?: string;

  readonly required?: boolean;
  readonly rules?: Pick<RegisterOptions, "pattern">;
};

export function InputField({
  type,
  label,
  name,
  required = false,
  rules,
}: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const uid = useId();
  const id = uid.replaceAll(":", "");

  const error = errors?.[name ?? id];

  return (
    <div className="grid gap-1">
      {label && (
        <InputLabel label={`${label}${required ? "*" : ""}`} htmlFor={id} />
      )}
      <input
        type={type}
        id={id}
        className={styles.input(Boolean(error))}
        {...register(name ?? id, {
          required: {
            value: required,
            message: "This field is required",
          },
          ...rules,
        })}
      />
      {error?.message && <ErrorMessage message={error.message.toString()} />}
    </div>
  );
}

const styles = {
  input: (error: boolean) =>
    clsx(
      "bg-white border rounded-md p-2",
      "focus:outline-none focus:ring-2 focus:ring-blue-100",
      {
        "border-red-500": error,
        "border-surface": !error,
      },
    ),
};
