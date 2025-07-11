import { ColorModeToggle } from "@/components/color-mode-toggle";
import { Wrapper } from "@/components/ui//wrapper";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { NavigationItems } from "./components/navigation-items";

export function Navigation() {
  return (
    <>
      <Wrapper className="bg-background sticky top-0 mt-2 flex border-y">
        <div className={spacer} />
        <Container>
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
