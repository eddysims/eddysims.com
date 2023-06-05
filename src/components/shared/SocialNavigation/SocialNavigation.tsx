import NextLink from "next/link";

import { IconNames, Icon } from "../Icon";

type SocialItem = {
  url: string;
  icon: IconNames;
  title: string;
};

const socialItems: SocialItem[] = [
  {
    url: "https://www.linkedin.com/in/edeesims/",
    icon: "linkedin",
    title: "Connect with me on LinkedIn",
  },
  {
    url: "https://github.com/eddysims",
    icon: "github",
    title: "View my Github",
  },
  {
    url: "https://github.com/eddysims/eddysims.com",
    icon: "code",
    title: "View for code for this site",
  },
];

export function SocialNavigation() {
  return (
    <nav id="social-navigation">
      <ul className="flex items-center gap-3">
        {socialItems.map((item) => {
          return (
            <li key={item.url}>
              <NextLink href={item.url} target="_blank">
                <Icon name={item.icon} />
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
