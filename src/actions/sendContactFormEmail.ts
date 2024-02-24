"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  readonly name: string;
  readonly email: string;
  readonly findme?: string;
  readonly message?: string;
};

export const sendContactFormEmail = async (data: ContactFormData) => {
  const { name, email, findme, message } = data;

  if (!name || !email) {
    return { success: false, error: "Name and email are required" };
  }

  try {
    const response = await resend.emails.send({
      from: "Contact Form Submission <noreply@eddysims.com>",
      to: process.env.RESEND_PERONSAL_EMAIL as string,
      subject: `Contact form submission from: ${name}`,
      html: `<h1>Hello! ${name} sent you an email</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Found me: ${findme}</p>
      <p>Message: ${message}</p>
      `,
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true, response };
  } catch (err) {
    // do something with the error
    return { success: false, error: err };
  }
};
