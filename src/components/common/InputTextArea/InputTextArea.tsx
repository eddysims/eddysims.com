import type { InputFieldProps } from "@/components/common/InputField";
import { InputField } from "@/components/common/InputField";

type InputTextAreaProps = Readonly<
  Pick<
    InputFieldProps,
    "label" | "name" | "required" | "register" | "formState"
  >
>;

export function InputTextArea(props: InputTextAreaProps) {
  return <InputField {...props} type="textarea" />;
}
