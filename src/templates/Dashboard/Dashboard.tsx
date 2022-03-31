import { LayoutCentered } from "@/components/LayoutCentered";
import { Text } from "@/components/Text";
import { Container } from "@/components/Container";
import { PrivatePage } from "@/components/PrivatePage";
import { useAuth } from "@/hooks/useAuth";

import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <PrivatePage visible={!!user}>
      <LayoutCentered title="Dashboard">
        <Container size="small" className={styles.content}>
          <Text>
            Thanks for signing in. There is nothing here. I hope you didn&apos;t
            have any expectations
          </Text>
        </Container>
      </LayoutCentered>
    </PrivatePage>
  );
}
