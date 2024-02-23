import { Meta } from "@storybook/react";

import { useForm } from "@/hooks/useForm";

import { InputText } from ".";

const disabletTable = {
  table: {
    disable: true,
  },
};

/**
 * ## Usage
 *
 * ```tsx
 * import { InputText } from "@/components/common/InputText";
 * ```
 */
const meta: Meta<typeof InputText> = {
  title: "form elements/InputText",
  component: InputText,
  argTypes: {
    register: disabletTable,
    formState: disabletTable,
  },
};

export default meta;

export function Primary({ ...args }) {
  const methods = useForm();

  return <InputText {...args} {...methods} />;
}
