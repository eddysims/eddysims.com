import Link from 'next/link';

import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Link href="/" passHref>
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <a className={styles.link}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
