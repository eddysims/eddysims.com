import { HeroContent } from "@/components/pages/home/HeroContent";
import { ProfileImage } from "@/components/pages/home/ProfileImage";
import { Container } from "@/components/shared/Container";
import { Column, Grid } from "@/components/shared/Grid";
import { LayoutCentered } from "@/components/shared/LayoutCentered";

export default function Home() {
  return (
    <LayoutCentered>
      <Container>
        <Grid columns={{ mobile: 1, desktop: 2 }} gap="xl">
          <Column order={{ mobile: 2, desktop: 1 }} verticalAlign="center">
            <HeroContent />
          </Column>
          <Column order={{ mobile: 1, desktop: 2 }}>
            <ProfileImage />
          </Column>
        </Grid>
      </Container>
    </LayoutCentered>
  );
}
