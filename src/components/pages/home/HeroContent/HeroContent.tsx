import { Button } from "@/components/shared/Button";
import { Heading } from "@/components/shared/Heading";
import { Text } from "@/components/shared/Text";
import { Svg } from "@/components/svg";

export function HeroContent() {
  return (
    <div className="grid gap-5 lg:gap-10 text-center lg:text-left max-w-lg mx-auto lg:max-w-full items-center order-2">
      <Heading as="h1">Eddy Sims</Heading>
      <div className="flex gap-8">
        <div className="-mt-3 hidden lg:block">
          <Svg name="backArrow" />
        </div>
        <div className="grid gap-5">
          <Text>
            Edmonton based software developer with over 15 years of experience.
            Currently for hire. Looking to show off some work, experiment, and
            share my learnings.
          </Text>
          <div>
            <Button
              label="Let's Chat"
              onClick={() =>
                (window.location.href = "mailto:eddysimsweb@gmail.com")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
