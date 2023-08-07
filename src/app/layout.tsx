import Footer from "@src/_components/Footer/Footer";
import "./globals.css";
import Styles from "./layout.module.scss";
import Navbar from "@src/_components/Navbar/Navbar";
import type { Metadata } from "next";
import { Imprima } from "next/font/google";

const imprima = Imprima({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Margus Web",
    description: "A simple web page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={imprima.className}>
                <header className={Styles.header}>
                    <Navbar />
                </header>
                <main className={Styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
