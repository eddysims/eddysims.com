import { PropsWithChildren } from "react";
import { LayoutCentered } from "@/components/LayoutCentered";
import { Heading } from "@/components/Heading";

type PrivatePageProps = {
  readonly visible: boolean;
};

export function PrivatePage({
  children,
  visible,
}: PropsWithChildren<PrivatePageProps>) {
  if (!visible) {
    return (
      <LayoutCentered title="Access Denied">
        <Heading>🙅 Sorry. You are not allowed to view this page </Heading>
      </LayoutCentered>
    );
  }

  return <>{children}</>;
}
