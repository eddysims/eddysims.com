import { LayoutCentered } from "@/components/LayoutCentered";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { TextAccent } from "@/components/TextAccent";

import styles from "./Home.module.css";

export function Home() {
  return (
    <LayoutCentered>
      <Container className={styles.content}>
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
      <Container size="small" className={styles.content}>
        <Text>
          Front end developer with over 15 years of experience. Looking to
          experiment here, and show off some of my personal work.
        </Text>
      </Container>
    </LayoutCentered>
  );
}
