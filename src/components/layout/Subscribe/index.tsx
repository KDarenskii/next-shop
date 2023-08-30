import Image from "next/image";

import { FC } from "react";

import cn from "clsx";

import Container from "@/components/Container";
import Title from "@/components/typography/Title";
import Button from "@/components/ui/Button";
import { Input, InputGroup } from "@/components/ui/Input";

import styles from "./subscribe.module.scss";

interface Props {
    className?: string;
}

const Subscribe: FC<Props> = ({ className }) => {
    return (
        <section className={cn(styles.section, className)}>
            <Container>
                <div className={styles.wrapper}>
                    <Title className={styles.title} variant="light">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </Title>
                    <Form />
                </div>
            </Container>
        </section>
    );
};

export default Subscribe;

function Form() {
    return (
        <form className={styles.form}>
            <InputGroup>
                <Image
                    src="/img/icons/mail.svg"
                    width={20}
                    height={16}
                    alt="Mail"
                />
                <Input placeholder="Enter your email address" />
            </InputGroup>
            <Button variant="light">Subscribe to Newsletter</Button>
        </form>
    );
}
