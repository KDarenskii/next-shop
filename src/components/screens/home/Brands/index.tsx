import Image from "next/image";

import { FC } from "react";

import Container from "@/components/Container";

import styles from "./brands.module.scss";

const brandsList: {
    src: string;
    alt: string;
    width: number;
    height: number;
}[] = [
    { src: "/img/brands/versace.svg", alt: "", width: 166, height: 33 },
    { src: "/img/brands/zara.svg", alt: "", width: 91, height: 38 },
    { src: "/img/brands/gucci.svg", alt: "", width: 156, height: 36 },
    { src: "/img/brands/prada.svg", alt: "", width: 194, height: 32 },
    { src: "/img/brands/calvin-klein.svg", alt: "", width: 206, height: 33 },
];

const Brands: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <ul>
                    {brandsList.map(({ alt, src, width, height }) => (
                        <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            key={src}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Brands;
