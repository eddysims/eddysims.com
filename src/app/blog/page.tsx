import NextLink from "next/link";

import { formatDate } from "@/helpers/formatDate";
import { fetchPublishedDevPosts } from "@/lib/devto";
import { Post } from "@/lib/devto/types";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";

export default async function Page() {
  const posts = await fetchPublishedDevPosts();

  return (
    <Container>
      <Container size="xs">
        <div className="space-y-5">
          <Heading as="h1">Blog</Heading>
          <Heading as="h2" style="h3">
            Explore my writings
          </Heading>

          <Text>
            Welcome to my mind dumb. Here you will find my writings. They will
            be mostly related to technology, however you may find a few random
            thoughts here and there. I hope you enjoy 🙂
          </Text>
        </div>
      </Container>

      <div className="my-16 space-y-8">
        {posts.map((post: Post) => (
          <div key={post.slug}>
            <Heading as="h2" style="h3">
              {post.title}
            </Heading>
            <Text size="sm">{formatDate(post.published_at)}</Text>
            <Text>{post.description}</Text>
            <NextLink
              href={`/blog/${post.slug}`}
              aria-label={`Read ${post.title}`}
            >
              Read Post
            </NextLink>
          </div>
        ))}
      </div>
    </Container>
  );
}
