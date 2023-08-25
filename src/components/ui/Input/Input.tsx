import { FC, InputHTMLAttributes } from "react";

import cn from "clsx";

import styles from "./input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({ className, ...rest }) => {
    return <input className={cn(styles.input, className)} {...rest} />;
};

export default Input;
