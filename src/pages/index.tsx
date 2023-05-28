import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Column, Grid } from "@/components/shared/Grid";
import { Heading } from "@/components/shared/Heading";
import { LayoutCentered } from "@/components/shared/LayoutCentered";
import { Text } from "@/components/shared/Text";
import { Svg } from "@/components/svg";

export default function Home() {
  return (
    <LayoutCentered>
      <Container>
        <Grid columns={{ mobile: 1, desktop: 2 }}>
          <Column>
            <div className="grid gap-5 lg:gap-8 text-center lg:text-left">
              <Heading as="h1">Eddy Sims</Heading>
              <div className="flex gap-8">
                <div className="-mt-3">
                  <Svg name="backArrow" />
                </div>
                <div className="grid gap-5">
                  <Text>
                    Edmonton based software developer with over 15 years of
                    experience. Currently for hire. Looking to show off some
                    work, experiment, and share my learnings.
                  </Text>
                  <div>
                    <Button
                      label="Let's Chat"
                      onClick={() =>
                        (window.location.href = "mailto:eddysimsweb@gmail.com")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Column>
        </Grid>
      </Container>
    </LayoutCentered>
  );
}
