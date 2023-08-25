import { NextPage } from "next";
import Link from "next/link";

import Intro from "@/components/home/Intro";

const HomePage: NextPage = () => {
    return (
        <>
            <Link href="/about">About</Link>
            <Intro />
        </>
    );
};

export default HomePage;
