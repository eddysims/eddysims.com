import { HeaderLink } from "./components/HeaderLink";
import { Container } from "@/components/Container";
import { showToast } from "@/components/Toast";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks/useAuth";

import styles from "./Header.module.css";

export function Header() {
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
    <div className={styles.header}>
      <Container className={styles.container}>
        <Button
          icon={user ? "LogOut" : "GitHub"}
          onClick={user ? logout : login}
        />
      </Container>
    </div>
  );
}
