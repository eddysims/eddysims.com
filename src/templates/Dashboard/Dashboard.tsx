import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";

export function Dashboard() {
  return (
    <Layout title="Eddy Sims | Front End Developer">
      <Hero>
        <Container size="small">
          <Text>
            Thanks for signing in. There is nothing here. I hope you didn&apos;t
            have any expectations
          </Text>
        </Container>
      </Hero>
    </Layout>
  );
}
