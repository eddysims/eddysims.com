import clsx from "clsx";

import { formatDate } from "@/helpers/formatDate";

import { Button } from "@/components/common/Button";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Icon } from "@/components/ui/Icon";

import type { Post } from "@/lib/devto/types";

type BlogCardProps = {
  readonly post: Pick<
    Post,
    "title" | "description" | "slug" | "published_at" | "reading_time_minutes"
  >;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className={clsx("rounded p-5 shadow", "lg:p-8", "xl:py-12")}>
      <Heading as="h3">{post.title}</Heading>

      <div className="my-5">
        <Text>{post?.description}</Text>
      </div>
      <div className="text-text-dark flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="-mt-0.5">
            <Icon icon="calendar-line" size="sm" />
          </div>
          <Text size="sm">{formatDate(post.published_at)}</Text>
        </div>
        &bull;
        <div className="flex items-center gap-2">
          <div className="-mt-0.5">
            <Icon icon="timer-line" size="sm" />
          </div>
          <Text size="sm">{post.reading_time_minutes} minute read</Text>
        </div>
      </div>

      <div className="text-text-dark mt-5 flex items-center gap-2">
        <Button
          href={`/blog/${post.slug}`}
          label="Read Post"
          ariaLabel={`Read post: ${post.title}`}
          size="sm"
        />
      </div>
    </div>
  );
}
