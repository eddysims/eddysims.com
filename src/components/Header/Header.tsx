import { LoginButtons } from "./components/LoginButtons";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <LoginButtons />
      </nav>
    </header>
  );
}
