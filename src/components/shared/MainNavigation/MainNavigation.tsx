import { clsx } from "clsx";

import { Container } from "@/components/shared/Container";
import { Icon, IconNames } from "@/components/shared/Icon";

import { Button } from "../Button";

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
        <ul className="flex justify-center items-center lg:justify-start gap-5">
          {menuItems.map((item) => (
            <li key={item.icon}>
              <a href={item.url} target="_blank">
                <Icon name={item.icon} size="large" />
              </a>
            </li>
          ))}

          <li className="hidden lg:block">
            <Button
              label="Download Résumé"
              size="small"
              href="/pdfs/Eddy_Sims_Resume.pdf"
              download
              variation="ghost"
            />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
