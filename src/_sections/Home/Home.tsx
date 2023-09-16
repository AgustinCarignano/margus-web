import Image from "next/image";
import React from "react";
import Styles from "./home.module.scss";
import homeImage from "@public/images/homeImage5.png";
import { ILocaleHome } from "@src/_models/locales.type";

function Home({ content }: { content: ILocaleHome }) {
    return (
        <section className={Styles.homeSection}>
            <div>
                <Image src={homeImage} width={446} height={446} alt="" />
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: content.title }}></h1>
        </section>
    );
}

export default Home;
