"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

import { useContactForm } from "./hooks/useContactForm";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "./schema/contactFormSchema";

export function ContactForm() {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const { isPending, mutateAsync } = useContactForm();

  const handleSubmit = async (values: ContactFormSchema) => {
    const { error, message } = await mutateAsync(values);

    if (error) {
      alert(`Error: ${message}`);

      return;
    }

    alert(`Success: ${message}`);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-5">
        <Input label="Name" name="name" />
        <Input label="Email Address" name="emailAddress" type="email" />
        <Textarea label="Message" name="message" />
        <Input name="email" type="email" isHoneyPot />
        <div className="mt-8">
          <Button label="Send message" isSubmit />
          {isPending && <p>Sending...</p>}
        </div>
      </form>
    </FormProvider>
  );
}
