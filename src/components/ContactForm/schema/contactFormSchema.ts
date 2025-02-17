import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  emailAddress: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  email: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
