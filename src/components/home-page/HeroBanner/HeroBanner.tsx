import NextImage from "next/image";

import { cn } from "@/utils/cva";

import { SocialLinks } from "@/components/social/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function HeroBanner() {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.name.wrapper}>
          <div className={styles.name.title}>
            <Heading as="h1" style="h3">
              Eddy Sims
            </Heading>
          </div>
          <div className={styles.name.social}>
            <SocialLinks />
          </div>
        </div>
        <Heading style="h1">Software Engineer</Heading>
        <div className={styles.tagline}>
          <Text>
            Helping people turn their ideas into sites &amp; apps that work.
          </Text>
        </div>
        <div className={styles.button}>
          <Button href="/contact" label="Chat with me" />
        </div>
      </div>

      <div className={styles.image}>
        <NextImage src="./images/eddy.svg" alt="Eddy Sims" fill />
      </div>
    </Container>
  );
}

const styles = {
  wrapper: cn(
    "flex min-h-dvh flex-col items-center justify-center",
    "@5xl:grid @5xl:grid-cols-6",
  ),
  content: cn(
    "grid gap-3 text-center",
    "@5xl:col-span-3 @5xl:self-center @5xl:text-left",
    "@6xl:col-span-2",
  ),
  name: {
    wrapper: cn(
      "mb-5 flex flex-col items-center gap-5",
      "@5xl:mb-3 @5xl:flex-row @5xl:gap-12",
    ),
    title: cn("order-2", "@5xl:order-1"),
    social: cn("order-1 text-red-600"),
  },
  tagline: cn("my-5"),
  button: cn("mx-auto", "@5xl:mx-0"),
  image: cn(
    "relative hidden min-h-full",
    "@5xl:col-span-3 @5xl:block",
    "@6xl:col-start-4",
  ),
};
