import { useEffect, useState } from "react";
import {
  AuthErrorCodes,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

interface UserI {
  readonly uid: string;
  readonly displayName?: string | null;
  readonly email?: string | null;
  readonly photoURL?: string | null;
}

type useAuthParams = {
  onLogin?(): void;
  onLogout?(): void;
  onError?(): void;
};

export function useAuth({ onLogin, onLogout, onError }: useAuthParams) {
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

  async function login() {
    const provider = new GithubAuthProvider();

    try {
      await signInWithPopup(auth, provider)
        .then(() => {
          onLogin && onLogin();
        })
        .catch((error) => {
          const { code } = error;

          if (
            code === AuthErrorCodes.POPUP_CLOSED_BY_USER ||
            code === AuthErrorCodes.EXPIRED_POPUP_REQUEST
          ) {
            return;
          }

          onError && onError();
        });
    } catch (error) {
      throw Error("Something went wrong while loggin in.");
    }
  }

  async function logout() {
    await signOut(auth).then(() => {
      onLogout && onLogout();
    });
  }

  return {
    login,
    logout,
    loading,
    user,
    isLoggedIn: auth.currentUser?.uid !== undefined,
  };
}
