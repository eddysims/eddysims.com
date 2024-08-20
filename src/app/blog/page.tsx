import { fetchPublishedDevPosts } from "@/lib/devto";
import { cn } from "@/utils/cva";

import { BlogCard } from "@/components/blog/BlogCard";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Container } from "@/components/ui/Container";

import type { Post } from "@/lib/devto/types";

export default async function Page() {
  const posts = await fetchPublishedDevPosts();

  return (
    <>
      <Container size="sm" className={styles.hero}>
        <Heading as="h1">Blog</Heading>
        <Heading as="h2" style="h3">
          Explore my writings
        </Heading>

        <Text>
          Welcome to my mind dump. Here you will find my writings. They will be
          mostly related to technology, however you may find a few random
          thoughts here and there. I hope you enjoy 🙂.
        </Text>
      </Container>

      <div className={styles.grid}>
        {posts.map((post: Post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

const styles = {
  hero: cn(
    "mb-16 mt-32 space-y-5 text-balance border-b border-slate-800 pb-16",
  ),
  grid: cn(
    "grid gap-16",
    "@2xl:grid-cols-2 @2xl:gap-12",
    "@4xl:gap-16",
    "@6xl:grid-cols-3",
  ),
};
