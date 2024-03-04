import { notFound } from "next/navigation";

import { fetchPublishedDevPosts } from "@/lib/devto";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { RichText } from "@/components/common/RichText";

import type { Post } from "@/lib/devto/types";

export async function generateStaticParams() {
  const posts = await fetchPublishedDevPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

type PageParams = {
  readonly params: {
    slug: string;
  };
};

export default async function Page({ params }: PageParams) {
  const { slug } = params;

  const posts = await fetchPublishedDevPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <Container size="sm">
      <Heading>{post.title}</Heading>
      <RichText text={post.body_markdown} />
    </Container>
  );
}
