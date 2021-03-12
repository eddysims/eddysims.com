import { Heading } from "@pids/components/Heading";
import { Text } from "@pids/components/Text";
import { Container } from "@pids/components/Container";

import { Logo } from "~components/Logo";
import { ColoredText } from "~components/ColoredText";

import styles from "./IndexHero.module.css";

export function IndexHero() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Heading as="h1">
          Eddy Sims<ColoredText>.</ColoredText>
        </Heading>
        <div className={styles.content}>
          <Text size="large">
            <ColoredText>#YEG based software/web developer</ColoredText>
          </Text>
          <Text>
            Front end developer with over 15 years of experience. Currently
            helping to build{" "}
            <a href="https://getjobber.com" target="_blank" rel="noreferrer">
              Jobber
            </a>{" "}
            and{" "}
            <a
              href="https://atlantis.getjobber.com"
              target="_blank"
              rel="noreferrer"
            >
              Atlantis
            </a>
            . Looking to experiment here, and show off some of my personal work.
          </Text>
        </div>
      </Container>
    </div>
  );
}
