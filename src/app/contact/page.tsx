import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

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
