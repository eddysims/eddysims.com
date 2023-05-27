import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { LayoutCentered } from "@/components/shared/LayoutCentered";

export default function Home() {
  return (
    <LayoutCentered>
      <Container>
        <div className="grid gap-5 lg:gap-8 text-center lg:text-left">
          <Heading as="h1">Eddy Sims</Heading>
          <p>
            Edmonton based software developer with over 15 years of experience.
            Currently for hire. Looking to show off some work, experiment, and
            share my learnings.
          </p>
        </div>
      </Container>
    </LayoutCentered>
  );
}
