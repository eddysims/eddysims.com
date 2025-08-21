"use client";

import { CodeBlock } from "@/components/registry/code-block";
import { InstallCliBox } from "@/components/registry/install-cli-box";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function InstallClient({
  code,
  component,
}: {
  code: string;
  component: string;
}) {
  return (
    <Tabs defaultValue="cli">
      <TabsList>
        <TabsTrigger value="cli">CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="cli">
        <div className="mt-2">
          <InstallCliBox component={component} />
        </div>
      </TabsContent>
      <TabsContent value="manual">
        <CodeBlock code={code} language="tsx" expandable />
      </TabsContent>
    </Tabs>
  );
}
