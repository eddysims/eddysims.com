import { HeaderLink } from "./components/HeaderLink";
import { Container } from "@/components/Container";
import { showToast } from "@/components/Toast";
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

  const buttonTitle = `Log${user ? "out" : "in"}`;

  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <HeaderLink title={buttonTitle} onClick={user ? logout : login} />
      </Container>
    </div>
  );
}
