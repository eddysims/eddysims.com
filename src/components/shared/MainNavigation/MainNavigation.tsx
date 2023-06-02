import NextLink from "next/link";

import { Container } from "@/components/shared/Container";
import { SocialNavigation } from "@/components/shared/SocialNavigation";

export function MainNavigation() {
  const linkClass = "text-sm uppercase inline-block mt-1.5 font-bold";

  return (
    <Container
      className={
        "py-5 lg:py-8 flex justify-center lg:justify-end gap-8 items-center"
      }
    >
      <nav id="main-navigation" className="hidden lg:block">
        <ul className="flex gap-8">
          <li>
            <NextLink
              href="/pdfs/Eddy_Sims_Resume.pdf"
              target="_blank"
              className={linkClass}
              download
            >
              Download Résumé
            </NextLink>
          </li>

          <li>
            <NextLink
              href="https://calendly.com/eddysims/chat-with-eddy"
              target="_blank"
              className={linkClass}
            >
              Book a chat
            </NextLink>
          </li>
        </ul>
      </nav>
      <SocialNavigation />
    </Container>
  );
}
