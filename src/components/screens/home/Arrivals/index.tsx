import Link from "next/link";

import { FC } from "react";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/typography/Title";
import Button from "@/components/ui/Button";

import styles from "./arrivals.module.scss";

const Arrivals: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.body}>
                    <Title className={styles.title} size="middle">
                        New arrivals
                    </Title>
                    <ul className={styles.list}>
                        <ProductCard
                            price={260}
                            title="T-shirt with Tape Details"
                            src="/img/products/t-shirt.png"
                            discount={20}
                        />
                        <ProductCard
                            price={260}
                            title="T-shirt with Tape Details"
                            src="/img/products/t-shirt.png"
                            discount={20}
                        />
                        <ProductCard
                            price={260}
                            title="T-shirt with Tape Details"
                            src="/img/products/t-shirt.png"
                            discount={20}
                        />
                        <ProductCard
                            price={260}
                            title="T-shirt with Tape Details"
                            src="/img/products/t-shirt.png"
                            discount={20}
                        />
                    </ul>
                    <Link className={styles.link} href="/arrivals">
                        <Button variant="light">View All</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default Arrivals;
