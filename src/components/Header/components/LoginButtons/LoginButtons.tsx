import { useRouter } from "next/router";

import { Button } from "@/components/Button";
import { showToast } from "@/components/Toast";

import { useAuth } from "@/hooks/useAuth";

export function LoginButtons() {
  const { push } = useRouter();

  const onLogin = () => {
    showToast({ message: "🎉 Congrats! You are now signed in." });
    push("/dashboard");
  };

  const onLogout = () => {
    showToast({ message: "Successfully logged out" });
    push("/");
  };

  const { login, logout, user } = useAuth({
    onLogin,
    onLogout,
  });

  return (
    <Button icon={user ? "LogOut" : "GitHub"} onClick={user ? logout : login} />
  );
}
