import NextLink from "next/link";

import { formatDate } from "@/helpers/formatDate";
import { cn } from "@/utils/cva";

import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";

import { Details } from "./components/Details";

import type { Post } from "@/lib/devto/types";

type BlogCardProps = {
  readonly post: Pick<
    Post,
    "title" | "description" | "slug" | "published_at" | "reading_time_minutes"
  >;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className={styles.wrapper}>
      <NextLink href={`/blog/${post.slug}`} className={styles.title}>
        {post.title}
      </NextLink>
      <div className={styles.description}>
        <Text size="sm">{post?.description}</Text>
      </div>

      <footer className={styles.footer}>
        <div className={styles.details}>
          <Details label={formatDate(post.published_at)} icon="calendar-line" />
          <span className={styles.bullet}>&bull;</span>
          <Details
            label={`${post.reading_time_minutes} minute read`}
            icon="timer-line"
          />
        </div>

        <Button
          href={`/blog/${post.slug}`}
          label="Read Post"
          ariaLabel={`Read post: ${post.title}`}
          size="sm"
        />
      </footer>
    </div>
  );
}

const styles = {
  wrapper: cn("flex flex-col @container"),
  title: cn("text-sla font-display text-3xl uppercase tracking-wide"),
  description: cn("my-5 text-balance"),
  footer: cn("mt-auto space-y-5"),
  details: cn(
    "grid gap-2 text-slate-400",
    "@sm:flex @sm:items-center @sm:gap-3",
  ),
  bullet: cn("hidden @sm:inline"),
};
