import type { Metadata } from "next";

import { ReactNode } from "react";

import Header from "@/components/Header";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Home | NextShop",
    description: "Home page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
