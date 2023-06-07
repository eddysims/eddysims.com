import { HeroContent } from "@/components/pages/home/HeroContent";
import { ProfileImage } from "@/components/pages/home/ProfileImage";
import { Container } from "@/components/shared/Container";
import { Column, Grid } from "@/components/shared/Grid";
import { Layout } from "@/components/shared/Layout";
import { LayoutCentered } from "@/components/shared/LayoutCentered";
import { Section } from "@/components/shared/Section";

export default function Home() {
  return (
    <Layout>
      <Section>
        <Container className="pt-10 pb-14">
          <Grid columns={{ mobile: 1, desktop: 2 }} gap="xl">
            <Column order={{ mobile: 2, desktop: 1 }} verticalAlign="center">
              <HeroContent />
            </Column>
            <Column order={{ mobile: 1, desktop: 2 }}>
              <ProfileImage />
            </Column>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}
