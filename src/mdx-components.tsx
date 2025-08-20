import defaultMdxComponents from "fumadocs-ui/mdx";

import { Text } from "./components/ui/text";

import type { MDXComponents } from "mdx/types";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    p: ({ children, ...props }) => (
      <Text variant="md" {...props}>
        {children}
      </Text>
    ),
  };
}
