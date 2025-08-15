"use client";

import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { useEffect, useState, useTransition, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CodeBlockProps = HTMLAttributes<HTMLElement> & {
  code: string;
  lang: string;
  showLineNumbers?: boolean;
};

export function CodeBlock({
  code,
  lang,
  showLineNumbers = true,
  ...rest
}: CodeBlockProps) {
  const [rendered, setRendered] = useState<React.ReactNode>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const rendered = await highlight(code, {
        lang,
        components: {
          pre: (props) => <Base.Pre {...props} />,
        },
      });
      setRendered(rendered);
    });
  }, [code, lang]);

  if (isPending) {
    return (
      <Base.CodeBlock {...rest}>
        <Base.Pre
          className={cn(
            "animate-pulse",
            showLineNumbers ? "pl-10 pr-4" : "pl-3"
          )}
        >
          {code}
        </Base.Pre>
      </Base.CodeBlock>
    );
  }

  const props = {
    ...rest,
    ...(showLineNumbers ? { "data-line-numbers": true } : {}),
  };

  return (
    <Base.CodeBlock
      {...props}
    >
      <Base.Pre>{rendered}</Base.Pre>
    </Base.CodeBlock>
  );
}
