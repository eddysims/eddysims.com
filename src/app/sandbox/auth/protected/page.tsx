import { getServerSession } from "next-auth";

import { Heading } from "@/components/Heading";

export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session) {
    return <Heading as="h3">Access Denied. Please Sign In</Heading>;
  }

  return <Heading as="h3">{session?.user?.name}, you are protected</Heading>;
}
