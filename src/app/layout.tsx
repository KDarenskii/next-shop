import type { Metadata } from "next";

import { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";

import "@/assets/styles/index.scss";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Home | NextShop",
    description: "Home page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Subscribe className={styles.subscribe} />
                <Footer />
            </body>
        </html>
    );
}
