import { FC } from "react";

import Container from "@/components/Container";
import Title from "@/components/typography/Title";

import styles from "./feedback.module.scss";

const Feedback: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title className={styles.title} size="middle">
                    OUR HAPPY CUSTOMERS
                </Title>
            </Container>
        </section>
    );
};

export default Feedback;
