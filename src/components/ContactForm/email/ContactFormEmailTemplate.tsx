import * as React from "react";

import type { ContactFormSchema } from "../schema/contactFormSchema";

export function ContactFormEmailTemplate({
  name,
  message,
  emailAddress,
}: ContactFormSchema) {
  return (
    <div>
      <h1>A message from: {name}</h1>
      <p>{message}</p>

      <p>Reply to: {emailAddress}</p>
    </div>
  );
}
