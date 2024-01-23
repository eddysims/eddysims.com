import Image from "next/image";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
      <Container>
        <div className="grid grid-cols-6 min-h-screen">
          <div className="col-span-2 self-center grid gap-3">
            <Heading as="h1" style="h3">
              Eddy Sims
            </Heading>
            <Heading as="h2" style="h1">
              Software Engineer
            </Heading>
            <div className="mt-5">
              <Text>
                Helping people turn their ideas into sites &amp; apps that work.
              </Text>
            </div>
          </div>
          <div className="relative col-span-3 col-start-4">
            <Image src="./images/eddy.svg" alt="Foo" fill />
          </div>
        </div>
      </Container>
    </main>
  );
}
