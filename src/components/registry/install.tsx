import { readFileSync } from "node:fs";
import { join } from "node:path";
import { InstallClient } from "@/components/registry/install-client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

type InstallProps = {
  component: string;
};

export function Install({ component }: InstallProps) {
  const src = getExampleSource(component);

  if (!src) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Component not found</AlertTitle>
        <AlertDescription>
          <div className="text-sm mt-1 leading-loose">
            Component <code className="bg-destructive/5 border-destructive/20 text-destructive">{component}</code> not found. Please check that the
            component is defined in the{" "}
            <code className="whitespace-nowrap bg-destructive/5 border-destructive/20 text-destructive">
              registry/new-york/{component}/components/
            </code>{" "}
            directory.
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return <InstallClient code={src} />
}

function getExampleSource(component: string) {
  try {
    const fullPath = join(
      process.cwd(),
      "registry",
      "new-york",
      component,
      "components",
      `${component}.tsx`
    );
    const content = readFileSync(fullPath, "utf-8");
    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
}
