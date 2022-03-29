import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { TextAccent } from "@/components/TextAccent";
import { Hero } from "@/components/Hero";

export function Home() {
  return (
    <Layout title="Eddy Sims | Front End Developer">
      <Hero>
        <Container>
          <h1
            style={{
              margin: 0,
              fontSize: "8vw",
              fontWeight: 700,
              textTransform: "full-size-kana",
            }}
          >
            Eddy Sims<TextAccent>.</TextAccent>
          </h1>
        </Container>
        <Container size="small">
          <Text>
            Front end developer with over 15 years of experience. Looking to
            experiment here, and show off some of my personal work.
          </Text>
        </Container>
      </Hero>
    </Layout>
  );
}
