import { useMutation } from "@tanstack/react-query";

import { sendContactForm } from "../actions/sendContactForm";

import type { ContactFormSchema } from "../schema/contactFormSchema";

export function useContactForm() {
  return useMutation({
    mutationFn: async (values: ContactFormSchema) =>
      await sendContactForm(values),
  });
}
