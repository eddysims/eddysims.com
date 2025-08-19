import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Link } from "@/components/ui/link";
import { Signature } from "@/components/ui/signature";
import { HoverText } from "@/components/ui/hover-text";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 * Blog Layout: app/blog/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2 mr-8">
        <Signature className="size-10" />
        <span className="lowercase">
          <HoverText content="Eddy Sims" />
        </span>
      </span>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  githubUrl: "https://github.com/eddysims",
  links: [
    // {
    //   type: "custom",
    //   children: <span className="mx-2"><Link href="/registry">Registry</Link></span>,
    // },
    // {
    //   type: "custom",
    //   children: <span className="mx-2"><Link href="/blog">Blog</Link></span>,
    // },
  ],
  searchToggle: {
    enabled: false,
  },
};
