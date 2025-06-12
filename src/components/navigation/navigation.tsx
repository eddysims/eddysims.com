import { ColorModeToggle } from "@/components/color-mode-toggle";
import { Wrapper } from "@/components/ui//wrapper";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { NavigationItems } from "./components/navigation-items";
import { NavigationLogo } from "./components/navigation-logo";

export function Navigation() {
  return (
    <>
      <NavigationLogo />
      <Wrapper className="sticky top-0 mt-2 flex xl:mt-4">
        <div className={spacer} />
        <Container className="flex items-center">
          <NavigationItems />
        </Container>
        <div className={spacer}>
          <ColorModeToggle />
        </div>
      </Wrapper>
    </>
  );
}

const spacer = cn("hidden flex-1 p-2 xl:block");
