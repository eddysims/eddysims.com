import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { TextAccent } from "@/components/TextAccent";
import { Hero } from "@/components/Hero";

import { HeartSpread } from "./components/HeartSpread";

export function Home() {
  return (
    <Layout title="Eddy Sims | Front End Developer">
      <Hero>
        <Container size="small">
          <HeartSpread />
          <Heading as="h1">
            Eddy Sims<TextAccent>.</TextAccent>
          </Heading>
          <Text>
            Front end developer with over 15 years of experience. Looking to
            experiment here, and show off some of my personal work.
          </Text>
        </Container>
      </Hero>
    </Layout>
  );
}

function Heart() {
  return <TextAccent>♥️</TextAccent>;
}
