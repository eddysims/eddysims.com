import { ColorModeToggle } from "@/components/color-mode-toggle";
import { Wrapper } from "@/components/ui//wrapper";
import { Container } from "@/components/ui/container";

export function Navigation() {
  return (
    <Wrapper className="sticky top-0 mt-2 flex xl:mt-4">
      <div className="hidden flex-1 p-2 xl:block" />
      <Container className="flex items-center"> </Container>
      <div className="hidden flex-1 p-2 xl:block">
        <ColorModeToggle />
      </div>
    </Wrapper>
  );
}
