import { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { InputText } from "../InputText";

import { Form } from ".";

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
  const methods = useForm({ mode: "onTouched" });

  const handleSubmit = methods.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <Form {...args} onSubmit={handleSubmit}>
      <div className="space-y-5">
        <InputText label="First name" {...methods} required />
        <InputText label="Last name" {...methods} />
        <button type="submit"> Submit</button>
      </div>
    </Form>
  );
}
