import {
  Html,
  Head,
  Container,
  Text,
  Font,
  Tailwind,
  Img,
} from "@react-email/components";

type ContactFormData = {
  readonly name: string;
  readonly email: string;
  readonly findme?: string;
  readonly message?: string;
};

const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const host = process.env.NEXT_PUBLIC_VERCEL_URL;
const imagePrefix = `${protocol}://${host}`;

export default function ContactFormTemplate({
  name,
  email,
  findme,
  message,
}: ContactFormData) {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font fontFamily="Arial" fallbackFontFamily="Verdana" />
          <title>Contact Form Submission</title>
        </Head>
        <body className="bg-[#171820] py-12">
          <Container className="my-8">
            <Img src={`${imagePrefix}/images/emails/logo.png`} alt="logo" />
          </Container>
          <Container className="bg-[#F2EDE7] text-[#171820] px-5 py-8 rounded">
            <Text className="text-2xl font-bold">
              Hello. {name} just send you an email
            </Text>
            <Text className="text-xl underline">Details:</Text>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            {findme && (
              <Text>
                <strong>Found me:</strong> {findme}
              </Text>
            )}
            {message && (
              <>
                <Text>
                  <strong>Message:</strong>
                </Text>
                <Text>{message}</Text>
              </>
            )}
          </Container>
        </body>
      </Html>
    </Tailwind>
  );
}
