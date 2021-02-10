import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Logo } from "~components/Logo";

import styles from "./Navigation.module.css";

export function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav className={styles.navigation}>
      <div className={styles.wrapper}>
        <Link href="/" passHref>
          <a>
            <Logo size="small" />
          </a>
        </Link>

        <ul className={styles.items}>
          <li>
            <Link href="/blog" passHref>
              <a
                className={classNames(styles.link, {
                  [styles.active]: pathname.includes("/blog"),
                })}
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
