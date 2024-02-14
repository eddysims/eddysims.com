"use client";

import { Form } from "@/components/Form";
import { Heading } from "@/components/Heading";
import { InputText } from "@/components/InputText";

export function ContactForm() {
  return (
    <div>
      <Heading>Contact</Heading>

      <Form onSubmit={() => alert("submitted")}>
        <InputText label="Name" name="name" required />
        <InputText label="How did you find me?" name="find-me" />
      </Form>
    </div>
  );
}
