import { InputField } from "@/components/InputField";
import type { InputFieldProps } from "@/components/InputField";

type InputEmailProps = Pick<InputFieldProps, "label" | "name" | "required">;

const emailRegex = /\S+@\S+\.\S+/;

export function InputEmail(props: Readonly<InputEmailProps>) {
  return (
    <InputField
      {...props}
      type="email"
      rules={{
        pattern: {
          value: emailRegex,
          message: "Entered value does not match email format",
        },
      }}
    />
  );
}
