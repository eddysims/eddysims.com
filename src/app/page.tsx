import Image from "next/image";

import { Container } from "@/components/ui/container";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "@/components/ui/link";
import { Wrapper } from "@/components/ui/wrapper";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <Wrapper className="bg-dots -mt-px border-b-0">
        <Container borderless className="py-30 text-center">
          <h1 className="inline-flex text-6xl font-bold lowercase">
            Eddy <span className="font-normal">Sims</span>
          </h1>
          <p className="font-gosha mt-2 text-lg text-gray-500">
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

        <div className="bg-background">
          <Container borderless className="py-8 text-center">
            <h2 className="text-lg text-gray-600 lowercase">
              Companies I have helped
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              I&apos;ve helped startups, agencies, and established companies
              turn complex ideas into reliable software.
            </p>

            <ul className="my-4 flex flex-wrap items-center justify-center">
              <li className={logo}>
                <Image
                  src="/images/marit.svg"
                  alt="Marit Health"
                  width={100}
                  height={50}
                />
              </li>
              <li className={logo}>
                <Image
                  src="/images/arrive.svg"
                  alt="Arrive Recommerce"
                  width={100}
                  height={50}
                />
              </li>
              <li className={logo}>
                <Image
                  src="/images/parachute.svg"
                  alt="Parachute Home"
                  width={100}
                  height={50}
                />
              </li>

              <li className={logo}>
                <Image
                  src="/images/dan-davis.svg"
                  alt="Dan Davis Music"
                  width={100}
                  height={50}
                />
              </li>
              <li className={logo}>
                <Image
                  src="/images/flyfree.svg"
                  alt="Flyfree Movement"
                  width={100}
                  height={50}
                />
              </li>
            </ul>

            <Link href="/hire-me" variant="default">
              You could be next
            </Link>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}

const logo = cn(
  "inline-flex w-1/2 justify-center p-4 text-center md:w-1/3 xl:w-1/5",
);
