import NextImage from "next/image";

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
          <Column order={{ mobile: 2, desktop: 1 }}>
            <div className="grid gap-5 lg:gap-10 text-center lg:text-left items-center order-2">
              <Heading as="h1">Eddy Sims</Heading>
              <div className="flex gap-8">
                <div className="-mt-3 hidden lg:block">
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
          <Column order={{ mobile: 1, desktop: 2 }}>
            <div className="w-3/4 md:w-1/2 lg:w-full  mx-auto">
              <NextImage
                alt="Welcome to EddySims.com"
                src="/images/pfp.png"
                width={464}
                height={610}
                className="mx-auto"
              />
            </div>
          </Column>
        </Grid>
      </Container>
    </LayoutCentered>
  );
}
