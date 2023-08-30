import Image from "next/image";

import { FC } from "react";

import Container from "@/components/Container";
import Paragraph from "@/components/typography/Paragraph";
import Button from "@/components/ui/Button";

import styles from "./footer.module.scss";

const socialsSrc = [
    "/img/icons/social/twitter.svg",
    "/img/icons/social/facebook.svg",
    "/img/icons/social/instagram.svg",
];

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <Image
                            className={styles.logo}
                            src="/img/logo.svg"
                            alt="Logo"
                            width={167}
                            height={23}
                        />
                        <Paragraph className={styles.text}>
                            We have clothes that suits your style and which
                            you’re proud to wear. From women to men.
                        </Paragraph>
                        <Socials />
                    </div>
                    <LinksList
                        title="Company"
                        list={["About", "Features", "Works", "Career"]}
                    />
                    <LinksList
                        title="Help"
                        list={[
                            "Customer Support",
                            "Delivery Details",
                            "Terms & Conditions",
                            "Privacy Policy",
                        ]}
                    />
                    <LinksList
                        title="FAQ"
                        list={[
                            "Account",
                            "Manage Deliveries",
                            "Orders",
                            "Payments",
                        ]}
                    />
                    <LinksList
                        title="Resources"
                        list={[
                            "Free eBooks",
                            "Development Tutorial",
                            "How to - Blog",
                            "Youtube Playlist",
                        ]}
                    />
                </div>
                <Paragraph size="small">
                    Shop.co © 2000-2023, All Rights Reserved
                </Paragraph>
            </Container>
        </footer>
    );
};

export default Footer;

function Socials() {
    return (
        <div className={styles.socials}>
            {socialsSrc.map((src) => (
                <a href="#" key={src}>
                    <Image src={src} alt="" width={28} height={28} />
                </a>
            ))}
        </div>
    );
}

function LinksList({ title, list }: { title: string; list: string[] }) {
    return (
        <div className={styles.linksList}>
            <h6>{title}</h6>
            <ul>
                {list.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
