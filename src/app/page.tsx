import { Container } from "@/components/ui/container";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "@/components/ui/link";
import { Wrapper } from "@/components/ui/wrapper";

export default function Home() {
  return (
    <div>
      <Wrapper className="bg-dots -mt-px text-center">
        <Container borderless className="py-48">
          <h1 className="inline-flex text-7xl font-bold lowercase">
            Eddy <span className="font-normal">Sims</span>
          </h1>
          <p className="font-gosha mt-2 text-xl text-gray-500">
            Software engineer{" "}
            <HoverCard>
              <HoverCardTrigger>
                <span className="line-through decoration-wavy">for hire</span>
              </HoverCardTrigger>
              <HoverCardContent>
                If you would like to be notified when I am available for hire,{" "}
                <Link href="/newsletter">Sign up for my newsletter</Link>
              </HoverCardContent>
            </HoverCard>
          </p>
        </Container>
        <Container className="bg-muted h-1" />
      </Wrapper>
    </div>
  );
}
