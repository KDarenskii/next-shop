import Link from "next/link";

import { FC } from "react";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/typography/Title";
import Button from "@/components/ui/Button";

import styles from "./selling.module.scss";

const Selling: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title className={styles.title} size="middle">Top Selling</Title>
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
            </Container>
        </section>
    );
};

export default Selling;
