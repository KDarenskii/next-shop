import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import Container from "@/components/Container";
import Search from "@/components/Search";

import Navigation from "../Navigation";
import styles from "./header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Image
                        className={styles.logo}
                        src="/img/logo.svg"
                        alt="Logo"
                        width={160}
                        height={22}
                    />
                    <Navigation />
                    <Search />
                    <div className={styles.actions}>
                        <Link href="/cart">
                            <Image
                                src="/img/icons/cart.svg"
                                alt="Cart"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href="/profile">
                            <Image
                                src="/img/icons/user.svg"
                                alt="User"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
