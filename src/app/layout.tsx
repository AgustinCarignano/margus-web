import "./globals.css";
import Navbar from "@src/_components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Magus Web",
    description: "A simple web page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
