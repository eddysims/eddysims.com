"use client";

import { useState } from "react";

import { sendContactFormEmail } from "@/actions/sendContactFormEmail";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import { Heading } from "@/components/common/Heading";
import { InputEmail } from "@/components/common/InputEmail";
import { InputText } from "@/components/common/InputText";
import { InputTextArea } from "@/components/common/InputTextArea";
import { Text } from "@/components/common/Text";

import { useForm } from "@/hooks/useForm";

import type { ContactFormData } from "@/actions/sendContactFormEmail";

export function ContactForm() {
  const [status, setStatus] = useState<string>();
  const methods = useForm();
  const {
    formState: { isSubmitting },
  } = methods;

  // @ts-expect-error TODO: fix the form types
  const handleSubmit = methods.handleSubmit(async (data: ContactFormData) => {
    setStatus(undefined);
    try {
      const { success, error } = await sendContactFormEmail(data);

      if (typeof error === "string") {
        setStatus(error);
      }

      if (success === true) {
        setStatus("Message sent!");
      }
    } catch (err) {
      setStatus("Error sending message. Please try again.");
    }
  });

  return (
    <div>
      <Heading as="h2" style="h1">
        Contact
      </Heading>
      {status && <Text>{status}</Text>}
      <Form onSubmit={handleSubmit}>
        <div className="space-y-5 mt-5">
          <InputText name="name" label="Name" required {...methods} />
          <InputEmail name="email" label="Email" required {...methods} />
          <InputText name="findme" label="How did you find me?" {...methods} />
          <InputTextArea name="message" label="Message" {...methods} />
        </div>
        <div className="space-y-5 mt-8">
          <Button
            isSubmit
            label="Send Message"
            variantion="outline"
            isLoading={isSubmitting}
          />
          <Text size="sm">
            Never share sensitive information through this form.
          </Text>
        </div>
      </Form>
    </div>
  );
}
