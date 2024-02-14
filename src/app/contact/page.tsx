import { Resend } from "resend";

import { Button } from "@/components/Button";

const resend = new Resend(process.env.RESEND_API_KEY);

export default function Page() {
  const sendEmail = async () => {
    "use server";

    try {
      const data = await resend.emails.send({
        from: "test@resend.dev",
        to: "eddysimsweb@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      });

      return { success: true, data };
    } catch (err) {
      // do something with the error
      return { success: false, error: err };
    }
  };

  return (
    <div>
      <Button onClick={sendEmail} label="Send the email" />
    </div>
  );
}
