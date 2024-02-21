"use client";

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Heading } from "@/components/Heading";
import { InputEmail } from "@/components/InputEmail";
import { InputText } from "@/components/InputText";
import { InputTextArea } from "@/components/InputTextArea";
import { Text } from "@/components/Text/Text";

export function ContactForm() {
  return (
    <div>
      <Heading style="h1">Contact</Heading>
      <Form onSubmit={() => alert("submitted")}>
        <div className="mt-5 grid gap-5">
          <InputText label="Name" name="name" required />
          <InputEmail label="Email" name="email" required />
          <InputText label="How did you find me?" name="find-me" />
          <InputTextArea label="Message" name="message" />
          <div className="mt-5 space-y-3">
            <Text size="sm">
              Never share sensitive information through this form.
            </Text>
            <Button
              label="Send Message"
              variation="outline"
              onClick={() => alert("Submit")}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
