import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import Container from "@/components/Container";
import Search from "@/components/Search";

import cart from "@/assets/img/cart.svg";
import logo from "@/assets/img/logo.svg";
import user from "@/assets/img/user.svg";

import Navigation from "../Navigation";
import styles from "./header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Image src={logo} alt="Logo" width={160} height={22} />
                    <Navigation />
                    <Search />
                    <div className={styles.actions}>
                        <Link href="/cart">
                            <Image
                                src={cart}
                                alt="Cart"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href="/profile">
                            <Image
                                src={user}
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
