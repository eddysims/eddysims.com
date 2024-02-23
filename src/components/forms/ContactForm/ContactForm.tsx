import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import { Heading } from "@/components/common/Heading";
import { InputEmail } from "@/components/common/InputEmail";
import { InputText } from "@/components/common/InputText";
import { InputTextArea } from "@/components/common/InputTextArea";
import { Text } from "@/components/common/Text";

import { useForm } from "@/hooks/useForm";

export function ContactForm() {
  const methods = useForm();

  const handleSubmit = methods.handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log({ data });
  });

  return (
    <div>
      <Heading as="h2" style="h1">
        Contact
      </Heading>
      <Form onSubmit={handleSubmit}>
        <div className="space-y-5 mt-5">
          <InputText name="name" label="Name" required {...methods} />
          <InputEmail name="email" label="Email" required {...methods} />
          <InputText name="findme" label="How did you find me?" {...methods} />
          <InputTextArea name="message" label="Message" {...methods} />
        </div>
        <div className="space-y-5 mt-8">
          <Button isSubmit label="Send Message" variantion="outline" />
          <Text size="sm">
            Never share sensitive information through this form.
          </Text>
        </div>
      </Form>
    </div>
  );
}
