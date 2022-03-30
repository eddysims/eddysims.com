import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { PrivatePage } from "@/components/PrivatePage";
import { useAuth } from "@/hooks/useAuth";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <PrivatePage visible={!!user}>
      <Layout title="Eddy Sims | Front End Developer">
        <Hero>
          <Container size="small">
            <Text>
              Thanks for signing in. There is nothing here. I hope you
              didn&apos;t have any expectations
            </Text>
          </Container>
        </Hero>
      </Layout>
    </PrivatePage>
  );
}
