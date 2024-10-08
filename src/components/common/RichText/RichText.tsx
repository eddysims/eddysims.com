import Markdown, { type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

type RichTextProps = {
  readonly text: string;
};

const markdownComponentMap: () => Components = () => ({
  h1: (props) => <Heading as="h1">{props.children}</Heading>,
  h2: (props) => <Heading as="h2">{props.children}</Heading>,
  h3: (props) => <Heading as="h3">{props.children}</Heading>,
  p: (props) => <Text {...props} />,
});

export function RichText({ text }: RichTextProps) {
  return (
    <Markdown
      components={markdownComponentMap()}
      rehypePlugins={[rehypeRaw, remarkGfm]}
      disallowedElements={["script", "style"]}
    >
      {text}
    </Markdown>
  );
}
