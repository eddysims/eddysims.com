import { Metadata } from "next";

import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me | Eddy Sims",
  description:
    "Contact Eddy Sims, Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default function Page() {
  return (
    <Container size="xs">
      <ContactForm />
    </Container>
  );
}
