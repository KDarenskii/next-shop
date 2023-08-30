import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./title.module.scss";

interface Props {
    size?: "small" | "middle" | "large";
    variant?: "dark" | "light";
    className?: string;
}

const Title: FC<PropsWithChildren<Props>> = ({
    children,
    size = "small",
    variant = "dark",
    className,
}) => {
    return (
        <h2
            className={cn(
                styles.title,
                styles[size],
                styles[variant],
                className,
            )}
        >
            {children}
        </h2>
    );
};

export default Title;
