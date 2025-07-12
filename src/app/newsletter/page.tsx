import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { NewsletterForm } from "@/features/newsletter/components/newsletter-form";

export default function NewsletterPage() {
  return (
    <Container borderless className="my-16">
      <div className="mb-6">
        <Heading as="h1">Newsletter</Heading>
      </div>
      <Text>
        I&apos;m working on a newsletter to share my thoughts and experiences
        with you.
      </Text>

      <NewsletterForm />
    </Container>
  );
}
