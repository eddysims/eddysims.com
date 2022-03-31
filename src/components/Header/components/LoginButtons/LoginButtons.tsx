import { useRouter } from "next/router";

import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { showToast } from "@/components/Toast";

import { useAuth } from "@/hooks/useAuth";

import styles from "./LoginButtons.module.css";

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
    <div className={styles.wrapper}>
      <Text size="small" weight="bold">
        {user ? "Logout" : "Login with Github"}
      </Text>
      <Button
        icon={user ? "LogOut" : "GitHub"}
        onClick={user ? logout : login}
        size="small"
      />
    </div>
  );
}
