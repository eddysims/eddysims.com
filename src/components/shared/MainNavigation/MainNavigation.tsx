import { clsx } from "clsx";

import { Container } from "@/components/shared/Container";
import { Icon, IconNames } from "@/components/shared/Icon";

type MenuItem = {
  url: string;
  icon: IconNames;
};

export function MainNavigation() {
  const menuItems: MenuItem[] = [
    { url: "https://www.linkedin.com/in/edeesims/", icon: "linkedin" },
    { url: "https://github.com/eddysims", icon: "github" },
    { url: "https://github.com/eddysims/eddysims.com", icon: "code" },
  ];

  return (
    <Container className={clsx("py-5 lg:py-8")}>
      <nav>
        <ul className="flex justify-center lg:justify-start gap-5">
          {menuItems.map((item) => (
            <li key={item.icon}>
              <a href={item.url} target="_blank">
                <Icon name={item.icon} size="large" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
