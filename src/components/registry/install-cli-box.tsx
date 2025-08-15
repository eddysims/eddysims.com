import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { CodeBlock } from "@/components/registry/code-block";
import { getClientSideUrl } from "@/utils/get-urls";
import {
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "fumadocs-ui/components/codeblock";

type InstallCliBoxProps = {
  component: string;
};

type Shell = "pnpm" | "npm" | "yarn" | "bun";

export function InstallCliBox({ component }: InstallCliBoxProps) {
  const [tab, setTab] = React.useState<Shell>("pnpm");

  const registryUrl = getClientSideUrl();
  const componentUrl = `${registryUrl}/r/${component}`;
  const commandMap = {
    pnpm: `pnpm dlx shadcn@latest add ${componentUrl}`,
    npm: `npx shadcn@latest add ${componentUrl}`,
    yarn: `yarn shadcn@latest add ${componentUrl}`,
    bun: `bunx --bun shadcn@latest add ${componentUrl}`,
  };


  return (
    <CodeBlockTabs defaultValue="pnpm">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="pnpm" onClick={() => setTab("pnpm")}>pnpm</CodeBlockTabsTrigger>
        <CodeBlockTabsTrigger value="npm" onClick={() => setTab("npm")}>npm</CodeBlockTabsTrigger>
        <CodeBlockTabsTrigger value="yarn" onClick={() => setTab("yarn")}>yarn</CodeBlockTabsTrigger>
        <CodeBlockTabsTrigger value="bun" onClick={() => setTab("bun")}>bun</CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlock showLineNumbers={false} code={commandMap[tab]} lang="sh" />
    </CodeBlockTabs>
  );
}
