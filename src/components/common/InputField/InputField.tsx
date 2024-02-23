"use client";

import clsx from "clsx";
import { useId } from "react";
import {
  FieldValues,
  FormState,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import { ErrorMessage } from "@/components/ErrorMessage";
import { InputLabel } from "@/components/InputLabel";

export type InputFieldProps = {
  /**
   * The type of input to render
   */
  readonly type: "text";
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

  /**
   *
   */

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

  return (
    <div className={styles.container}>
      {label && (
        <InputLabel
          label={`${label}${required ? "*" : ""}`}
          htmlFor={inputName}
        />
      )}
      <input
        type={type}
        className={styles.input(Boolean(error))}
        {...register(inputName, {
          required: {
            value: required,
            message: "This field is required",
          },
          ...rules,
        })}
      />
      {typeof error?.message === "string" && (
        <ErrorMessage message={error.message} />
      )}
    </div>
  );
}

const styles = {
  container: clsx("space-y-1"),
  input: (hasError: boolean) =>
    clsx(
      "w-full bg-white border rounded-md py-2 px-3 tracking-wide",
      "focus:outline-none focus:ring-2 ",
      "font-base color-surface",
      {
        "border-surface focus:ring-blue-500/25": !hasError,
        "border-red-500 focus:ring-primary/25": hasError,
      },
    ),
};
