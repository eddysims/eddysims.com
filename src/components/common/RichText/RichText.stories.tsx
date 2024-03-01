import { RichText } from "./RichText";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `RichText` component is used to easily render HTML
 * or markdown component to the page. It uses shared
 * components from revive to keep consistency.
 *
 * `RichText` component is a wrapper around the
 * [React Markdown](https://github.com/remarkjs/react-markdown)
 * library. You can view the React Markdown docs for more details.
 *
 * ## Usage
 *
 * ```tsx
 * import { RichText } from "@/components/common/RichText";
 * ```
 */
const meta: Meta<typeof RichText> = {
  title: "typography/RichText",
  component: RichText,
  args: {
    text: "<h1>Welcome</h1><p>We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot.</p><p>We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot.</p>",
  },
  render: (args) => <RichText {...args} />,
};

export default meta;
type Story = StoryObj<typeof RichText>;

/**
 * The `RichText` component allows for rendering raw HTML.
 */
export const Primary: Story = {};

/**
 * It also allows for rendering markdown.
 */
export const WithMarkdown: Story = {
  args: {
    text: "## Welcome\n We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot.\n We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot.",
  },
};
