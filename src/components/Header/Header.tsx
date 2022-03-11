import { HeaderLink } from "./components/HeaderLink";
import { Container } from "@/components/Container";

import { useAuth } from "@/hooks/useAuth";

import styles from "./Header.module.css";

export function Header() {
  const { login, isLoggedIn, logout } = useAuth();

  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        {isLoggedIn ? (
          <HeaderLink title="Logout" onClick={logout} />
        ) : (
          <HeaderLink title="Login" onClick={login} />
        )}
      </Container>
    </div>
  );
}
