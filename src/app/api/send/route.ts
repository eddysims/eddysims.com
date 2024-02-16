import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["eddysimsweb@gmail.com"],
      subject: "Hello world",
      html: `<p>Congrats on sending your <strong>first email</strong>!</p>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

export async function GET() {
  return new Response("GET not allowed", { status: 405 });
}

export async function OPTIONS() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
