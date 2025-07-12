import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
