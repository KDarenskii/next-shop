import { NextPage } from "next";
import Link from "next/link";

import styles from "./page.module.css";

const HomePage: NextPage = () => {
    return (
        <div>
            <Link href="/about">About</Link>
        </div>
    );
};

export default HomePage;
