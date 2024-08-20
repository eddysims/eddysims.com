"use client";

import { sendGAEvent } from "@next/third-parties/google";

import { sendContactForm } from "@/actions/forms/sendContactForm";
import { useToast } from "@/providers/ToastProvider/hooks/useToast";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import { Heading } from "@/components/common/Heading";
import { InputEmail } from "@/components/common/InputEmail";
import { InputText } from "@/components/common/InputText";
import { InputTextArea } from "@/components/common/InputTextArea";
import { Text } from "@/components/common/Text";

import { useForm } from "@/hooks/useForm";

import type { ContactFormData } from "@/actions/forms/sendContactForm";

export function ContactForm() {
  const toast = useToast();
  const methods = useForm();
  const {
    formState: { isSubmitting },
  } = methods;

  // @ts-expect-error TODO: fix the form types
  const handleSubmit = methods.handleSubmit(async (data: ContactFormData) => {
    try {
      const { success, error } = await sendContactForm(data);

      if (typeof error === "string") {
        toast({ message: error, variation: "error" });
      }

      if (success === true) {
        toast("Your message has been sent!");
        sendGAEvent({ event: "Contact form submitted" });
      }
    } catch {
      toast({
        message: "Error sending message. Please try again.",
        variation: "error",
      });
    }
  });

  return (
    <div className="space-y-5">
      <Heading as="h2" style="h1">
        Contact
      </Heading>
      <Form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <InputText name="name" label="Name" required {...methods} />
          <InputEmail name="email" label="Email" required {...methods} />
          <InputText name="findme" label="How did you find me?" {...methods} />
          <InputTextArea name="message" label="Message" {...methods} />
        </div>
        <div className="mt-8 space-y-5">
          <Button
            isSubmit
            label="Send Message"
            variation="outline"
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
