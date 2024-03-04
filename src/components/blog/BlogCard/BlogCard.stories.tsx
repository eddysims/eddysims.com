import { Meta, StoryObj } from "@storybook/react";

import { BlogCard } from ".";

/**
 * The `BlogCard` is a card that is used to display the details
 * of a blog post.
 *
 * ## Usage
 *
 * ```tsx
 * import { BlogCard } from "@/components/blog/BlogCard";
 * ```
 */
const meta: Meta<typeof BlogCard> = {
  title: "blog/BlogCard",
  component: BlogCard,
  args: {
    post: {
      title: "How to use React Query",
      description:
        "A guide on how to use React Query. Everything that you need to know how to make your app...",
      slug: "how-to-use-react-query",
      published_at: "2021-08-01T00:00:00Z",
      reading_time_minutes: 5,
    },
  },
  render: (args) => <BlogCard {...args} />,
};

export default meta;
type Story = StoryObj<typeof BlogCard>;
export const Primary: Story = {};
