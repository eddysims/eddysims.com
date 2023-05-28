import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Column, Grid } from "@/components/shared/Grid";
import { Heading } from "@/components/shared/Heading";
import { LayoutCentered } from "@/components/shared/LayoutCentered";
import { Text } from "@/components/shared/Text";

export default function Home() {
  return (
    <LayoutCentered>
      <Container>
        <Grid columns={{ mobile: 1, desktop: 2 }}>
          <Column>
            <div className="grid gap-5 lg:gap-8 text-center lg:text-left">
              <Heading as="h1">Eddy Sims</Heading>
              <Text>
                Edmonton based software developer with over 15 years of
                experience. Currently for hire. Looking to show off some work,
                experiment, and share my learnings.
              </Text>
              <div>
                <Button
                  label="Let's Chat"
                  href="mailto:eddysimsweb@gmail.com"
                />
              </div>
            </div>
          </Column>
        </Grid>
      </Container>
    </LayoutCentered>
  );
}
