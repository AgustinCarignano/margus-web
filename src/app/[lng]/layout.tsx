import { dir } from "i18next";
import { languages } from "@src/i18n/settings";
import Footer from "@src/_components/Footer/Footer";
import "@styles/globals.scss";
import Navbar from "@src/_components/Navbar/Navbar";
import type { Metadata } from "next";
import { Imprima } from "next/font/google";

const imprima = Imprima({ weight: "400", subsets: ["latin"] });
// const languages = ["es", "en"];

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
    title: "Margus Web",
    description: "A simple web page",
};

type LayoutType = {
    children: React.ReactNode;
    params: {
        lng: "es" | "en";
    };
};

export default function RootLayout({ children, params: { lng } }: LayoutType) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
            </head>
            <body className={`${imprima.className}`}>
                <header>
                    <Navbar lng={lng} />
                </header>
                <main>{children}</main>
                <Footer lng={lng} />
            </body>
        </html>
    );
}
