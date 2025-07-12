"use server";

import {
  type NewsletterFormSchema,
  newsletterFormSchema,
} from "@/features/newsletter/schema/newsletter-form.schema";
import { resend } from "@/lib/resend";

import type { ActionResult } from "@/types";

export async function subscribeToNewsletter(
  data: NewsletterFormSchema,
): ActionResult<never> {
  const parsed = newsletterFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      error: true,
      message: "Invalid form data",
    };
  }

  try {
    await resend.contacts.create({
      ...parsed.data,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    return {
      message: "Subscribed to the newsletter",
    };
  } catch {
    return {
      error: true,
      message: "Something went wrong subscribing to the newsletter",
    };
  }
}
