import { Metadata, NextPage } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | NextShop",
    description: "Page describes our shop",
};

const AboutPage: NextPage = () => {
    return (
        <div>
            AboutPage
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default AboutPage;
