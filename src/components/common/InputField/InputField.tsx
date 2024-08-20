"use client";

import clsx from "clsx";
import { useId } from "react";

import { ErrorMessage } from "@/components/common/ErrorMessage";
import { InputLabel } from "@/components/common/InputLabel";

import type {
  FieldValues,
  FormState,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type InputFieldProps = {
  /**
   * The type of input to render
   */
  readonly type: "text" | "email" | "textarea";
  /**
   * Name of the input. If not provided, a random id
   * will be used as the name
   */
  readonly name?: string;
  /**
   * The label for the input
   */
  readonly label?: string;
  /**
   * Is the input required?. Adds default validation for
   * required fields
   */
  readonly required?: boolean;
  /**
   * Rules for the input. Based on react-hook-form
   * [validation rules](https://react-hook-form.com/get-started#Applyvalidation).
   */
  readonly rules?: Pick<RegisterOptions, "pattern">;

  readonly register: UseFormRegister<FieldValues>;
  readonly formState: FormState<FieldValues>;
};

export function InputField({
  type,
  name,
  label,
  required = false,
  rules,
  ...methods
}: InputFieldProps) {
  const id = useId();
  const inputName = name ?? id.replaceAll(":", "");

  const {
    register,
    formState: { errors },
  } = methods;

  const error = errors?.[inputName];
  const registerInput = register(inputName, {
    required: {
      value: required,
      message: "This field is required",
    },
    ...rules,
  });

  return (
    <div className={styles.container}>
      {label && (
        <InputLabel
          label={`${label}${required ? "*" : ""}`}
          htmlFor={inputName}
        />
      )}
      {type === "textarea" ? (
        <textarea
          rows={5}
          className={clsx(styles.input(Boolean(error)), styles.textarea)}
          {...registerInput}
        />
      ) : (
        <input
          type={type}
          className={styles.input(Boolean(error))}
          {...registerInput}
        />
      )}
      {typeof error?.message === "string" && (
        <ErrorMessage label={error.message} />
      )}
    </div>
  );
}

const styles = {
  container: clsx("space-y-1"),
  input: (hasError: boolean) =>
    clsx(
      "w-full rounded-md border bg-white px-3 py-2 tracking-wide",
      "focus:bg-text focus:outline-none focus:ring-2",
      "font-base text-surface",
      {
        "border-surface focus:ring-blue-500/50": !hasError,
        "focus:ring-primary/25 border-red-500": hasError,
      },
    ),
  textarea: clsx("resize-none"),
};
