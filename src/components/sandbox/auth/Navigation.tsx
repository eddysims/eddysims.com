"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export function Navigation() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex p-5 gap-5">
      <Link href="/sandbox/auth/protected">Protected Route</Link>
      <Link href="/sandbox/auth/apiFromServer">Api call from server</Link>
      <Link href="/sandbox/auth/serverAction">Server action</Link>

      <div className="ml-auto">
        {session ? (
          <>
            Signed in as {session?.user?.email}
            <button
              className="bg-primary p-3 rounded ml-3"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            Not signed in
            <button
              className="bg-primary p-3 rounded ml-3"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
