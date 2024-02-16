"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: { firstName: string }) => {
  try {
    const email = await resend.emails.send({
      from: "test@resend.dev",
      to: "eddysimsweb@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    return { success: true, email, data };
  } catch (err) {
    // do something with the error
    return { success: false, error: err };
  }
};
