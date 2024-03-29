import { Meta } from "@storybook/react";

import { useForm } from "@/hooks/useForm";

import { InputTextArea } from ".";

const disabletTable = {
  table: {
    disable: true,
  },
};

/**
 * ## Usage
 *
 * ```tsx
 * import { InputTextArea } from "@/components/common/InputTextArea";
 * ```
 */
const meta: Meta<typeof InputTextArea> = {
  title: "form elements/InputTextArea",
  component: InputTextArea,
  argTypes: {
    register: disabletTable,
    formState: disabletTable,
  },
};

export default meta;

export function Primary({ ...args }) {
  const methods = useForm();

  return <InputTextArea {...args} {...methods} />;
}
