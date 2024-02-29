import { icons } from "./utils/icons";

import { Icon } from ".";

import type { Icons } from ".";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * The `Icon` component is a wrapper around
 * [Feather Icons](https://react-icons.github.io/react-icons/icons/fi/).
 *
 * They are rendered dynamically using the `next/dynamic` package. This
 * allows for only rendering the icon when it is needed.
 *
 * ## Usage
 *
 * ```ts
 * import { Icon } from "@/components/common/Icon";
 * ```
 */

const meta: Meta<typeof Icon> = {
  title: "components/Icon",
  component: Icon,
  args: {
    icon: "x",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};

export const AvailableIcons: Story = {
  parameters: {
    actions: {
      disabled: true,
    },
    controls: {
      disabled: true,
    },
  },
  render: () => {
    const allIcons = Object.keys(icons).sort();

    return (
      <table className="table-auto w-full">
        <thead className="bg-zinc-800 ">
          <tr>
            <th className="text-left p-3 border-r-2 border-zinc-900">Icon</th>
            <th className="text-left p-3">Icon Name</th>
          </tr>
        </thead>
        <tbody>
          {allIcons.map((icon) => (
            <tr key={icon}>
              <td className="border-2 border-zinc-800 p-3">
                <Icon icon={icon as Icons} />
              </td>
              <td className="border-2 border-zinc-800 p-3">
                <code className=" rounded font-mono text-sm bg-zinc-800 border-1 border-zinc-900 p-2">
                  {icon}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
