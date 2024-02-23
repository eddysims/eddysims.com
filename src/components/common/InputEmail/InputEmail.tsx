import { InputField } from "@/components/common/InputField";
import type { InputFieldProps } from "@/components/common/InputField";

type InputEmailProps = Readonly<
  Pick<
    InputFieldProps,
    "label" | "name" | "required" | "register" | "formState"
  >
>;

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
