import clsx from "clsx";

import { fetchPublishedDevPosts } from "@/lib/devto";
import { Post } from "@/lib/devto/types";

import { BlogCard } from "@/components/blog/BlogCard";
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

      <div
        className={clsx("my-16 grid gap-8", "md:grid-cols-2", "xl:grid-cols-3")}
      >
        {posts.map((post: Post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
