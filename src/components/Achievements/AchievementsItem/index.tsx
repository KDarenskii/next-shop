import { FC } from "react";

import cn from "clsx";

import styles from "./achievementsItem.module.scss";

interface Props {
    amount: number | string;
    name: string;
    className?: string;
}

const AchievementsItem: FC<Props> = ({ amount, name, className }) => {
    return (
        <li className={cn(styles.achievementItem, className)}>
            <p>{amount}+</p>
            <h6>{name}</h6>
        </li>
    );
};

export default AchievementsItem;
