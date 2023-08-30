import { NextPage } from "next";

import Arrivals from "@/components/screens/home/Arrivals";
import Brands from "@/components/screens/home/Brands";
import DressStyle from "@/components/screens/home/DressStyle";
import Intro from "@/components/screens/home/Intro";
import Selling from "@/components/screens/home/Selling";

const HomePage: NextPage = () => {
    return (
        <>
            <Intro />
            <Brands />
            <Arrivals />
            <Selling />
            <DressStyle />
        </>
    );
};

export default HomePage;
