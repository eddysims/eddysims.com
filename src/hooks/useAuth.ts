import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";

interface UserI {
  readonly uid: string;
  readonly displayName?: string | null;
  readonly email?: string | null;
  readonly photoURL?: string | null;
}

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserI | undefined>();

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser({
          uid: newUser.uid,
          displayName: newUser.displayName,
          email: newUser.email,
          photoURL: newUser.photoURL,
        });
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });
  }, []);

  return {
    loading,
    user,
    isLoggedIn: auth.currentUser?.uid !== undefined,
  };
}
