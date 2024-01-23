import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { display } from "@/styles/fonts";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
      <Container>
        <h1 className={`${display.className} text-3xl`}>Eddy Sims</h1>
        <h2>Software Engineer</h2>
        <Text>Helping people turn their ideas into sites &amp; apps that work.</Text>
        <button className="bg-primary text-text">Let&apos;s Chat</button>
      </Container>
    </main>
  );
}
