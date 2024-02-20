import { InputField } from "@/components/InputField";
import type { InputFieldProps } from "@/components/InputField";

type InputTextProps = Pick<InputFieldProps, "label" | "name" | "required">;

export function InputText(props: Readonly<InputTextProps>) {
  return <InputField {...props} type="text" />;
}
