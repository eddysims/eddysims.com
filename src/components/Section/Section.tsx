import { PropsWithChildren } from 'react';

import styles from './Section.module.css'

export function Section({ children }: PropsWithChildren<{}>) {
    return <div className={styles.section}>{children}</div>
}
