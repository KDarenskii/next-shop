import Link from "next/link";

import { FC } from "react";

import Container from "@/components/Container";
import Title from "@/components/typography/Title";

import styles from "./dressStyle.module.scss";

const DressStyle: FC = () => {
    return (
        <section>
            <Container>
                <div className={styles.body}>
                    <Title className={styles.title} size="middle">
                        BROWSE BY dress STYLE
                    </Title>
                    <div>
                        <div className={styles.row}>
                            <Link href="/">Casual</Link>
                            <Link href="/">Formal</Link>
                        </div>
                        <div className={styles.row}>
                            <Link href="/">Party</Link>
                            <Link href="/">Gym</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DressStyle;
