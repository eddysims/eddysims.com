"use client";

import { Form } from "@/components/Form";
import { Heading } from "@/components/Heading";
import { InputEmail } from "@/components/InputEmail";
import { InputText } from "@/components/InputText";
import { InputTextArea } from "@/components/InputTextArea";

export function ContactForm() {
  return (
    <div>
      <Heading>Contact</Heading>

      <Form onSubmit={() => alert("submitted")}>
        <InputText label="Name" name="name" required />
        <InputEmail label="Email" name="email" required />
        <InputText label="How did you find me?" name="find-me" />
        <InputTextArea label="Message" name="message" />
      </Form>
    </div>
  );
}
