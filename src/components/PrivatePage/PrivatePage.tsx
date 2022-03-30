import { PropsWithChildren } from "react";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";

type PrivatePageProps = {
  readonly visible: boolean;
};

export function PrivatePage({
  children,
  visible,
}: PropsWithChildren<PrivatePageProps>) {
  if (!visible) {
    return (
      <Layout title="Access Denied">
        <Hero>
          <Container size="small">
            <Text>🙅 Sorry. You are not allowed to view this page </Text>
          </Container>
        </Hero>
      </Layout>
    );
  }

  return <>{children}</>;
}
