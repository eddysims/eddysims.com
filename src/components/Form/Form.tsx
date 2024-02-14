import React, { PropsWithChildren } from "react";
import { useForm, FormProvider } from "react-hook-form";

type FormProps = {
  onSubmit: (data: Record<string, unknown>) => void;
};

export function Form({ onSubmit, children }: PropsWithChildren<FormProps>) {
  const methods = useForm();
  const handleSubmit = (data: Record<string, unknown>) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
}
