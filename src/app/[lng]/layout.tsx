import { dir } from "i18next";
import { languages } from "@src/i18n/settings";
import Footer from "@src/_components/Footer/Footer";
import "@styles/globals.scss";
import Navbar from "@src/_components/Navbar/Navbar";
import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import { asyncTranslation } from "@src/i18n";
import { LocalesPaths } from "@src/_models/locales.enum";
import { getGeneralContent } from "@src/_utils/content.utils";
import { LocaleOptions } from "@src/_models/locales.type";

const imprima = Imprima({ weight: "400", subsets: ["latin"] });

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
        lng: LocaleOptions;
    };
};

export default async function RootLayout({ children, params: { lng } }: LayoutType) {
    const { t: generals } = await asyncTranslation(lng, LocalesPaths.GENERAL);
    const generalContent = getGeneralContent(generals);
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
            </head>
            <body className={`${imprima.className}`}>
                <header>
                    <Navbar lng={lng} content={getGeneralContent(generals)} />
                </header>
                <main>{children}</main>
                <Footer content={generalContent} />
            </body>
        </html>
    );
}
