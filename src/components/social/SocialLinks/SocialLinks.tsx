import { SocialLink } from "@/components/social/SocialLink";

type SocialLinksProps = {
  readonly showLinkedin?: boolean;
  readonly showGithub?: boolean;
  readonly showCode?: boolean;
};

export function SocialLinks({
  showLinkedin = true,
  showGithub = true,
  showCode = true,
}: SocialLinksProps) {
  return (
    <nav id="social-icons">
      <ul className="flex gap-8">
        {showLinkedin && (
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/eddysims/"
              icon="linkedin"
            />
          </li>
        )}
        {showGithub && (
          <li>
            <SocialLink href="https://github.com/eddysims" icon="github" />
          </li>
        )}
        {showCode && (
          <li>
            <SocialLink
              href="https://github.com/eddysims/eddysims.com"
              icon="code"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
