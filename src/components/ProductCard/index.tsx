import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import styles from "./productCard.module.scss";

interface Props {
    src: string;
    title: string;
    price: number;
    discount?: number;
}

const ProductCard: FC<Props> = ({ price, src, title, discount }) => {
    const finalPrice = discount ? price - price * (discount / 100) : price;
    return (
        <Link className={styles.card} href="/">
            <div className={styles.imageContainer}>
                <Image src={src} alt="" width={120} height={245} />
            </div>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.priceWrapper}>
                <span className={styles.finalPrice}>${finalPrice}</span>
                {discount && <span className={styles.price}>${price}</span>}
                <div className={styles.discount}>-{discount}%</div>
            </div>
        </Link>
    );
};

export default ProductCard;
