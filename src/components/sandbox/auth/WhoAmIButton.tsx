"use client";

import { useState } from "react";

import { Text } from "@/components/common/Text/Text";

export function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();

  return (
    <div className="text-center">
      <button
        type="button"
        className="bg-primary rounded p-5"
        onClick={async () => setName(await whoAmIAction())}
      >
        Who am i?
      </button>
      {name && <Text>My name is {name}</Text>}
    </div>
  );
}
