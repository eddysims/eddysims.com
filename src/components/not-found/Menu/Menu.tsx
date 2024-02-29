import clsx from "clsx";
import NextLink from "next/link";

export function Menu() {
  return (
    <nav id="not-found-menu">
      <ul className="inline-flex gap-5">
        <li className={styles.link}>
          <NextLink href="/">Go Home</NextLink>
        </li>
        <li className={styles.link}>
          <NextLink href="/">Contact Me</NextLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  link: clsx("text-primary underline hover:no-underline"),
};
