import { useForm as useRHFForm } from "react-hook-form";

export function useForm() {
  const { register, formState, handleSubmit } = useRHFForm({
    mode: "onTouched",
  });

  return { register, formState, handleSubmit };
}
