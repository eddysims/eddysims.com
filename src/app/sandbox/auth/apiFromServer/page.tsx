import { headers } from "next/headers";

import { Text } from "@/components/common/Text";
import { Heading } from "@/components/ui/Heading";

export default async function ApiFromServer() {
  const response = await fetch(
    "http://localhost:1234/sandbox/auth/api/whoAmI",
    {
      method: "GET",
      headers: headers(),
    },
  ).then((res) => res.json());

  return (
    <>
      <Heading as="h3">API Route from server</Heading>
      <Text>Name: {response?.name}</Text>
    </>
  );
}
