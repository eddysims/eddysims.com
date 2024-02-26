import { icons } from "./utils/icons";

import { Icon } from ".";

import type { Icons } from ".";
import type { Meta, StoryObj } from "@storybook/react";

/**
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
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Icon Name</th>
          </tr>
        </thead>
        <tbody>
          {allIcons.map((icon) => (
            <tr key={icon}>
              <td>
                <Icon icon={icon as Icons} />
              </td>
              <td>
                <code>{icon}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
