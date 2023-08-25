import Link from "next/link";

import { FC } from "react";

import { navigationLinks } from "./navigation.data";
import styles from "./navigation.module.scss";

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                {navigationLinks.map(({ href, title, id }) => (
                    <li key={id}>
                        <Link href={href}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
