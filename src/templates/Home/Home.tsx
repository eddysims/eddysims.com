import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { LayoutCentered } from "@/components/LayoutCentered";
import { Text } from "@/components/Text";

export function Home() {
  return (
    <LayoutCentered>
      <Container>
        <Heading as="h1">Eddy Sims</Heading>
        <Text>
          Front end developer with over 15 years of experience. Looking to
          experiment here, and show off some of my personal work and learnings.
        </Text>
      </Container>
    </LayoutCentered>
  );
}
