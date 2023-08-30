import Image from "next/image";

import { FC } from "react";

import cn from "clsx";

import { Input, InputGroup } from "../ui/Input";
import styles from "./search.module.scss";

interface Props {
    inputClassName?: string;
    containerClassName?: string;
}

const Search: FC<Props> = ({ inputClassName, containerClassName }) => {
    return (
        <InputGroup className={cn(styles.search, containerClassName)}>
            <Image
                src="/img/icons/search.svg"
                alt="Search"
                width={24}
                height={24}
            />
            <Input
                className={inputClassName}
                type="text"
                placeholder="Search for products..."
            />
        </InputGroup>
    );
};

export default Search;
