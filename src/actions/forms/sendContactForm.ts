"use server";
import { render } from "@react-email/render";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import ContactFormTemplate from "@/emails/ContactFormTemplate";

export type ContactFormData = {
  readonly name: string;
  readonly email: string;
  readonly findme?: string;
  readonly message?: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  if (!data.name || !data.email) {
    return { success: false, error: "Name and email are required" };
  }

  const html = render(
    ContactFormTemplate({
      name: data.name,
      email: data.email,
      findme: data.findme,
      message: data.message,
    }),
  );

  console.log({ html, data });

  try {
    const response = await resend.emails.send({
      from: "Contact Form Submission <noreply@eddysims.com>",
      to: process.env.RESEND_PERONSAL_EMAIL as string,
      subject: `Contact form submission from: ${data.name}`,
      html,
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true, response };
  } catch (err) {
    // do something with the error
    return { success: false, error: err, catch: true };
  }
};
