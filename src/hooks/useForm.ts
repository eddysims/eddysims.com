/* eslint-disable react-hooks/rules-of-hooks */
import { useForm as useRHFForm, useFormContext } from "react-hook-form";

export function useForm() {
  return useFormContext() === null
    ? useRHFForm({ mode: "onTouched" })
    : useFormContext();
}
