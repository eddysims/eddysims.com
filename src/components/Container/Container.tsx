import { PropsWithChildren } from 'react';
import styles from './Container.module.css';

export function Container({ children }: PropsWithChildren<{}>) {
    return <div className={styles.container}>{children}</div>
}
