import { Container } from "@/components/Container";
import { Eddy } from "@/components/Eddy";
import { Text } from "@/components/Text";
import { display } from "@/styles/fonts";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
      <Container>
        <div className="flex min-h-screen">
          <div className="flex-1 self-center">
            <h1 className={`${display.className} text-3xl`}>Eddy Sims</h1>
            <h2>Software Engineer</h2>
            <Text>
              Helping people turn their ideas into sites &amp; apps that work.
            </Text>
            <button className="bg-primary text-text">Let&apos;s Chat</button>
          </div>
          <div className="relative flex-1">
            <Image src="./images/eddy.svg" alt="Foo" fill />
          </div>
        </div>
      </Container>
    </main>
  );
}
