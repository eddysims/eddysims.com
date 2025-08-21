import { readFileSync } from "node:fs";
import { join } from "node:path";

import { CodeBlock } from "./code-block";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export async function Demo({
  component,
  name,
}: {
  component: string;
  name: string;
}) {
  const Component = await import(
    `@/registry/new-york/${component}/examples/${name}.tsx`
  );
  const src = getExampleSource(component, name);

  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        {src && <TabsTrigger value="code">Code</TabsTrigger>}
      </TabsList>
      <TabsContent value="preview">
        <div className="flex  items-center justify-center h-100 border">
          <Component.default />
        </div>
      </TabsContent>
      {src && (
        <TabsContent value="code">
          <div className="h-100 border">
            <CodeBlock code={src} language="tsx" />
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
}

function getExampleSource(component: string, name: string) {
  try {
    const fullPath = join(
      process.cwd(),
      "registry",
      "new-york",
      component,
      "examples",
      `${name}.tsx`,
    );
    const content = readFileSync(fullPath, "utf-8");

    return content;
  } catch (error) {
    console.error(error);

    return null;
  }
}
