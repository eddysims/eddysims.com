"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const COLOR_MODES = [
  {
    icon: Sun,
    mode: "light",
  },
  {
    icon: Moon,
    mode: "dark",
  },
  {
    icon: Laptop,
    mode: "system",
  },
];

export function ColorModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ToggleModeWrapper>
        {COLOR_MODES.map(({ mode, icon: Icon }) => (
          <li key={mode}>
            <Skeleton>
              <Button size="icon" variant="outline">
                <Icon />
              </Button>
            </Skeleton>
          </li>
        ))}
      </ToggleModeWrapper>
    );
  }

  return (
    <ToggleModeWrapper>
      {COLOR_MODES.map(({ mode, icon: Icon }) => (
        <li key={mode}>
          <Button
            size="icon"
            variant={theme === mode ? "outline" : "ghost"}
            aria-label={`${mode} mode`}
            onClick={() => setTheme(mode)}
          >
            <Icon />
          </Button>
        </li>
      ))}
    </ToggleModeWrapper>
  );
}

function ToggleModeWrapper({ children }: React.PropsWithChildren) {
  return (
    <nav id="color-themes">
      <ul className="flex items-center gap-1">{children}</ul>
    </nav>
  );
}
