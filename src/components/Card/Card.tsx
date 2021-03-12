import { Heading } from "@pids/components/Heading";

import styles from "./Card.module.css";

interface CardProps {
  readonly title: string;
}
export function Card({ title }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}
