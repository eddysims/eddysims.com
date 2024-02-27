import clsx from "clsx";
import Image from "next/image";

import { ContactDrawerButton } from "@/providers/ContactDrawerProvider/components/ContactDrawerButton";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text/Text";

export default function Home() {
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-6 lg:min-h-screen">
        <div
          className={clsx(
            "grid gap-3 text-center",
            "lg:col-span-3 lg:self-center lg:text-left",
            "xl:col-span-2",
          )}
        >
          <Heading as="h1" style="h3">
            Eddy Sims
          </Heading>
          <Heading style="h1">Software Engineer</Heading>
          <div className="my-5">
            <Text>
              Helping people turn their ideas into sites &amp; apps that work.
            </Text>
          </div>
          <div className={clsx("mx-auto text-center", "lg:mx-0")}>
            <ContactDrawerButton label="Chat with me" />
          </div>
        </div>
        <div
          className={clsx(
            "relative hidden",
            "lg:block lg:col-span-3",
            "xl:col-start-4",
          )}
        >
          <Image src="./images/eddy.svg" alt="Eddy Sims" fill />
        </div>
      </div>
    </Container>
  );
}
