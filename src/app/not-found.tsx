import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Menu } from "@/components/not-found/Menu";
import { ParralaxImage } from "@/components/not-found/ParralaxImage";

export default function NotFoundPage() {
  return (
    <div>
      <div className="absolute inset-0 z-10">
        <ParralaxImage />
      </div>
      <div className="mt-72 text-center space-y-3">
        <Heading as="h1">404</Heading>
        <Text>Sorry... The page you are looking for can&apos;t be found.</Text>
      </div>
      <div className="relative z-20 mt-5 text-center">
        <Menu />
      </div>
    </div>
  );
}
