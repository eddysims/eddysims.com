import NextImage from "next/image";

import { ContactDrawerButton } from "@/providers/ContactDrawerProvider/components/ContactDrawerButton";
import { cn } from "@/utils/cva";

import { Heading } from "@/components/common/Heading";
import { SocialLinks } from "@/components/social/SocialLinks";

export function HeroBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.name.wrapper}>
          <div className={styles.name.title}>
            <Heading as="h1" style="h3">
              Eddy Sims
            </Heading>
          </div>
          <div className={styles.name.social}>
            <SocialLinks />
          </div>
        </div>
        <Heading style="h1">Software Engineer</Heading>
        <p className={styles.tagline}>
          Helping people turn their ideas into sites &amp; apps that work.
        </p>
        <div className={styles.button}>
          <ContactDrawerButton label="Chat with me" />
        </div>
      </div>
      <div className={styles.image}>
        <NextImage src="./images/eddy.svg" alt="Eddy Sims" fill />
      </div>
    </div>
  );
}

const styles = {
  wrapper: cn(
    "flex flex-1 flex-col justify-center",
    "lg:grid lg:min-h-full lg:grid-cols-6",
  ),
  content: cn(
    // "@sm:bg-blue-500 @md:bg-red-500 @lg:bg-green-500 @xl:bg-yellow-500 @2xl:bg-purple-500 @3xl:bg-pink-500 @4xl:bg-indigo-500 @5xl:bg-blue-500 @6xl:bg-red-500 @7xl:bg-gray-500",
    "grid gap-3 text-center",
    "lg:col-span-3 lg:self-center lg:text-left",
    "xl:col-span-2",
  ),
  name: {
    wrapper: cn(
      "mb-5 flex flex-col items-center gap-5",
      "lg:mb-3 lg:flex-row lg:gap-12",
    ),
    title: cn("order-2 lg:order-1"),
    social: cn("order-1 text-red-600"),
  },
  tagline: cn("my-5 text-lg"),
  button: cn("mx-auto text-center", "lg:mx-0"),
  image: cn("relative hidden", "lg:col-span-3 lg:block", "xl:col-start-4"),
};
