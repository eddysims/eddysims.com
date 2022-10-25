import { useState } from "react";
import { useRouter } from "next/router";
import classnames from "clsx";
import NextLink from "next/link";

import styles from "./Navigation.module.css";

type NavigationItem = {
  url: string;
  title: string;
  external?: boolean;
  color?: string;
};

export function Navigation() {
  const { route } = useRouter();
  const shouldShowHome = route !== "/";

  const mainNavItems = [
    {
      title: "Math and Art",
      url: "/blog/math-and-art",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Digital CV",
      url: "/digital-cv",
    },
    {
      title: "Code Snippets",
      url: "/code-snippets",
    },
  ];

  const socialNavItems = [
    {
      title: "Twitter",
      url: "https://twitter.com/edeesims",
      external: true,
      color: '#1D9BF0',
    },
    {
      title: "Github",
      url: "https://github.com/eddysims",
      external: true,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/edeesims/",
      external: true,
      color: "#0177B5"
    },
  ];

  return (
    <nav className={styles.nav}>
      {shouldShowHome && <div>EddySims.com</div>}
      <NavigationList items={mainNavItems} />
      <NavigationList items={socialNavItems} className={styles.social} />
    </nav>
  );
}

interface NavigationListProps {
  items: NavigationItem[];
  className?: string;
}

function NavigationList({ items, className }: NavigationListProps) {
  const listClass = classnames(styles.list, className);

  return (
    <ul className={listClass}>
      {items.map((item) => {
        return <NavigationItem key={item.title} {...item} />;
      })}
    </ul>
  );
}

const colors = [
  '#F9DB6D',
  '#F9DB6D',
  '#F9DB6D',
  '#A690A4',
  '#B1B695',
  '#CC5A71',
  '#8C7AA9',
  '#7192BE',
  '#F4D35E',
  '#9893DA',
]

function NavigationItem({ url, title, external,color }: NavigationItem) {
  const [cssColor] = useState(color ?? Math.floor(Math.random() * 10 + 1));

  const linkProps = {
    ...(external && { target: "_blank" }),
    className: styles.item,
  };
  return (
    <NextLink href={url} passHref>
      <a {...linkProps}>{title}</a>
    </NextLink>
  );
}
