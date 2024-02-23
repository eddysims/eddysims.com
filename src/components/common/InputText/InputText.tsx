import type { InputFieldProps } from "@/components/common/InputField";
import { InputField } from "@/components/common/InputField";

type InputTextProps = Readonly<
  Pick<
    InputFieldProps,
    "label" | "name" | "required" | "register" | "formState"
  >
>;

export function InputText(props: InputTextProps) {
  return <InputField {...props} type="text" />;
}
