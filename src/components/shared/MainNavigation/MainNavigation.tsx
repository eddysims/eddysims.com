import { clsx } from "clsx";

import { Container } from "@/components/shared/Container";
import { Icon, IconNames } from "@/components/shared/Icon";

import { Button } from "../Button";

type MenuItem = {
  url: string;
  icon: IconNames;
  label: string;
};

export function MainNavigation() {
  const menuItems: MenuItem[] = [
    {
      url: "https://www.linkedin.com/in/edeesims/",
      icon: "linkedin",
      label: "Connect with me on LinkedIn",
    },
    {
      url: "https://github.com/eddysims",
      icon: "github",
      label: "View my Github",
    },
    {
      url: "https://github.com/eddysims/eddysims.com",
      icon: "code",
      label: "View for code for this site",
    },
  ];

  return (
    <Container className={clsx("py-5 lg:py-8")}>
      <nav>
        <ul className="flex justify-center items-center lg:justify-start gap-5">
          {menuItems.map((item) => (
            <li key={item.icon}>
              <a href={item.url} target="_blank" aria-label={item.label}>
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
