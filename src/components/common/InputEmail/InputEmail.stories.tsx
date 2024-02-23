import { Meta } from "@storybook/react";

import { useForm } from "@/hooks/useForm";

import { InputEmail } from ".";

const disabletTable = {
  table: {
    disable: true,
  },
};

/**
 * ## Usage
 *
 * ```tsx
 * import { InputEmail } from "@/components/common/InputEmail";
 * ```
 */
const meta: Meta<typeof InputEmail> = {
  title: "form elements/InputEmail",
  component: InputEmail,
  argTypes: {
    register: disabletTable,
    formState: disabletTable,
  },
};

export default meta;

export function Primary({ ...args }) {
  const methods = useForm();

  return <InputEmail {...args} {...methods} />;
}
