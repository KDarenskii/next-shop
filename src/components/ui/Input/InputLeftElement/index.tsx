import { FC, Fragment, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./inputLeftElement.module.scss";

interface Props {
    className?: string;
}

const InputLeftElement: FC<PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    return <div className={cn(styles.element, className)}>{children}</div>;
};

export default InputLeftElement;
