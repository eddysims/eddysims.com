import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Eddy Sims",
  description:
    "Contact Eddy Sims, Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default function Page() {
  return (
    <Container size="sm">
      <Heading as="h1">Contact me</Heading>
      <div className="mt-8">
        <ContactForm />
      </div>
    </Container>
  );
}
