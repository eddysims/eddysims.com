import { useForm } from "react-hook-form";

import { InputField } from ".";

import type { Meta } from "@storybook/react";

const disabletTable = {
  table: {
    disable: true,
  },
};

/**
 * > PRIVATE
 *
 * **This component is private and should only be used to**
 * **create other form element components.**
 *
 */
const meta: Meta<typeof InputField> = {
  title: "form elements/InputField",
  component: InputField,
  args: {
    type: "text",
    required: true,
  },
  argTypes: {
    register: disabletTable,
    formState: disabletTable,
  },
  render: (args) => <Primary {...args} />,
};

export function Primary({ ...args }) {
  const methods = useForm({ mode: "onTouched" });

  return <InputField {...args} type={args.type} {...methods} />;
}

export default meta;
