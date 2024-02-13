import { getServerSession } from "next-auth";

import { WhoAmIButton } from "@/components/sandbox/auth/WhoAmIButton";

export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();

    return session?.user?.name ?? "not logged in";
  };

  return <WhoAmIButton whoAmIAction={whoAmI} />;
}
