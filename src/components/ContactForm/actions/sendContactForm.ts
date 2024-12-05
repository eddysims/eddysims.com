"use server";

import { Resend } from "resend";

import { env } from "@/env/server";

import { ContactFormEmailTemplate } from "../email/ContactFormEmailTemplate";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "../schema/contactFormSchema";

import type { ActionResponse } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(
  values: ContactFormSchema,
): Promise<ActionResponse<never>> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: true,
      message: "Invalid form data",
    };
  }

  if (parsed.data.email) {
    return {
      error: true,
      message: "Unauthorized, please try again",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: `Contact Form <${env.RESEND_SENDER_EMAIL}>`,
      to: [env.RESEND_PERSONAL_EMAIL],
      subject: "Contact Form Submission",
      react: ContactFormEmailTemplate(parsed.data),
    });

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      message: "Message sent successfully",
    };
  } catch {
    return {
      error: true,
      message: "Failed to send email, please try again",
    };
  }
}
