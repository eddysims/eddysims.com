import { Card } from "~components/Card";

import styles from "./IndexProjects.module.css";

export function IndexProjects() {
  return (
    <div className={styles.projects}>
      <div className={styles.grid}>
        <Card title="Find my blocks" />
        <Card title="FlyFree" />
        <Card title="Github Search" />
      </div>
    </div>
  );
}
