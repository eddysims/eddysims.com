import Link from "next/link";

import { Wrapper } from "./ui/wrapper";

const FOOTER_LINKS = [
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of service",
    href: "/terms-of-service",
  },
];

export function Footer() {
  return (
    <footer>
      <Wrapper className="grid gap-6 py-6 text-center text-sm">
        <div>
          &copy; Copyright {new Date().getFullYear()} Eddy Sims, all rights
          reserved.
        </div>

        <nav id="footer-navigation">
          <ul className="flex items-center justify-center gap-4">
            {FOOTER_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="underline hover:no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </footer>
  );
}
