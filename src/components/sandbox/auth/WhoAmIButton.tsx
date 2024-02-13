"use client";

import { useState } from "react";

import { Text } from "@/components/Text";

export function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();

  return (
    <div className="text-center">
      <button
        className="bg-primary p-5 rounded"
        onClick={async () => setName(await whoAmIAction())}
      >
        Who am i?
      </button>
      {name && <Text>My name is {name}</Text>}
    </div>
  );
}
