import { FC } from "react";

import cn from "clsx";

import { IAchievement } from "@/types/achievement.interface";

import AchievementsItem from "../AchievementsItem";
import styles from "./achievementsList.module.scss";

interface Props {
    list: IAchievement[];
    className?: string;
    itemClassName?: string;
}

const AchievementsList: FC<Props> = ({ list, className, itemClassName }) => {
    return (
        <ul className={cn(styles.list, className)}>
            {list.map(({ amount, name }) => (
                <AchievementsItem
                    className={itemClassName}
                    amount={amount}
                    name={name}
                    key={name}
                />
            ))}
        </ul>
    );
};

export default AchievementsList;
