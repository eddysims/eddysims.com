import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { HoverText } from "@/components/ui/hover-text";
import { Text } from "@/components/ui/text";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center">
      <Container>
        <div className="lg:*:animate-in lg:*:fade-in max-w-4xl *:inline *:not-first:ml-4 sm:not-first:ml-6">
          <Heading as="h1" className="font-kyoto lowercase lg:duration-1500">
            <HoverText content="Hello! I'm Eddy" />
            <HoverText content="Sims" />
          </Heading>
          <Text variant="xl" className="lg:duration-3000">
            I help businesses turn ideas into working websites and apps.
          </Text>
          <Text variant="lg" className="text-muted-foreground lg:duration-4500">
            I&apos;m a software engineer with nearly 20 years of experience. I
            have worked with startups, small businesses, and large enterprises
            to help them build, test, and validate their web app ideas quickly
            and efficiently!
          </Text>
        </div>
      </Container>
    </main>
  );
}

export const metadata = {
  title: "Eddy Sims",
  description: "Software Engineer",
};
