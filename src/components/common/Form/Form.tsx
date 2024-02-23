import React, { PropsWithChildren } from "react";

type FormProps = {
  /**
   * Submit handler to be called when submitting the form
   */
  readonly onSubmit: () => void;
};

export function Form({ onSubmit, children }: PropsWithChildren<FormProps>) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
