import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Heading } from './components/ui/heading';
import { Text } from './components/ui/text';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: ({ children, ...props }) => <h1 className="text-2xl font-bold" {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <Heading variant="md" as="h2" className='mt-6 mb-2' {...props}>{children}</Heading>,
    h3: ({ children, ...props }) => <h3 className="text-lg font-bold" {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 className="text-base font-bold" {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 className="text-sm font-bold" {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 className="text-xs font-bold" {...props}>{children}!!!!!!</h6>,
    p: ({ children, ...props }) => <Text variant="md" {...props}>{children}</Text>,
  };
}
