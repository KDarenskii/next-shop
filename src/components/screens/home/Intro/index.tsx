import Link from "next/link";

import { FC } from "react";

import { AchievementsList } from "@/components/Achievements";
import Container from "@/components/Container";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Button from "@/components/ui/Button";

import { IAchievement } from "@/types/achievement.interface";

import styles from "./intro.module.scss";

const achievements: IAchievement[] = [
    { amount: 200, name: "International Brands" },
    { amount: "2,000", name: "High-Quality Products" },
    { amount: "30,000", name: "Happy Customers" },
];

const Intro: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionWrapper}>
                <Container>
                    <div className={styles.content}>
                        <Title className={styles.title} size="large">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </Title>
                        <Paragraph className={styles.subtitle}>
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </Paragraph>
                        <Link href="/catalog">
                            <Button className={styles.button} variant="dark">
                                Shop Now
                            </Button>
                        </Link>
                        <AchievementsList list={achievements} />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Intro;
