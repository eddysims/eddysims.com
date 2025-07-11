import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { Wrapper } from "@/components/ui/wrapper";
import { routes } from "@/constants/routes";

const LOGOS = [
  {
    src: "/images/marit.svg",
    alt: "Marit Health",
    width: 100,
    height: 50,
  },
  {
    src: "/images/arrive.svg",
    alt: "Arrive Recommerce",
    width: 100,
    height: 50,
  },
  {
    src: "/images/parachute.svg",
    alt: "Parachute Home",
    width: 100,
    height: 50,
  },
  {
    src: "/images/dan-davis.svg",
    alt: "Dan Davis Music",
    width: 100,
    height: 50,
  },
  {
    src: "/images/flyfree.svg",
    alt: "Flyfree Movement",
    width: 100,
    height: 50,
  },
];

export function HomeHero() {
  return (
    <Wrapper className="bg-dots -mt-px flex flex-1 flex-col justify-center border-b">
      <Container borderless className="text-center">
        <div>
          <Heading as="h1" className="inline-flex lowercase">
            Eddy <span className="font-normal">Sims</span>
          </Heading>
          <Text>
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
          </Text>
        </div>

        <Divider />

        <div>
          <Heading as="h2" variant="accent">
            Companies I have helped
          </Heading>
          <div className="my-4">
            <Text>
              I&apos;ve helped startups, agencies, and established companies
              turn complex ideas into reliable software.
            </Text>
            <Text>
              <Link href={routes.hire}>You could be next</Link>.
            </Text>
          </div>
          <ul className="flex flex-wrap items-center justify-center">
            {LOGOS.map(({ src, alt, width, height }) => (
              <li
                key={src}
                className="inline-flex w-1/2 justify-center p-4 text-center md:w-1/3 xl:w-1/5"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="dark:invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
}
