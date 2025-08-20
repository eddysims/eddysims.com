import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/blog/breadcrumbs";
import { headingVariants } from "@/components/ui/heading";
import { HoverText } from "@/components/ui/hover-text";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={[{ title: "Overview", url: "", depth: 1 }, ...page.data.toc]}
      full={page.data.full}
      breadcrumb={{
        component: (
          <Breadcrumb
            tree={source.pageTree}
            prefix={{ href: "/registry", label: "Registry" }}
          />
        ),
      }}
    >
      <DocsTitle className={headingVariants({ variant: "lg" })}>
        <HoverText content={page.data.title} />
      </DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
