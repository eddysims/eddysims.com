import { InputText } from "@/components/common/InputText";
import { Button } from "@/components/ui/Button";

import { useForm } from "@/hooks/useForm";

import { Form } from ".";

import type { Meta } from "@storybook/react";

/**
 * ## Usage
 *
 * ```tsx
 * import { Form } from "@/components/common/Form";
 * ```
 */
const meta: Meta<typeof Form> = {
  title: "form elements/Form",
  component: Form,
};

export default meta;

export function Primary({ ...args }) {
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <Form {...args} onSubmit={handleSubmit}>
      <div className="space-y-5">
        <InputText label="First name" {...methods} required />
        <InputText label="Last name" {...methods} />
        <Button isSubmit label="Submit Form" />
      </div>
    </Form>
  );
}
