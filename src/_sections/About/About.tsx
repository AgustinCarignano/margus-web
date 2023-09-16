import AboutCard from "@src/_components/AboutCard/AboutCard";
import React from "react";
import Link from "next/link";
import Styles from "./about.module.scss";
import aguCard from "@public/images/aguCard4.svg";
import maruCard from "@public/images/maruCard3.png";
import { ILocaleAbout } from "@src/_models/locales.type";

async function About({ content }: { content: ILocaleAbout }) {
    const maruCardContent = <p aria-description="MARU" dangerouslySetInnerHTML={{ __html: content.card_maru }}></p>;
    const agusCardContent = <p aria-description="AGUS" dangerouslySetInnerHTML={{ __html: content.card_agus }}></p>;
    return (
        <section className={Styles.aboutSection} id="about">
            <h2 className={Styles.aboutSection__title}>{content.title.toUpperCase()}</h2>
            <p className={Styles.aboutSection__text} dangerouslySetInnerHTML={{ __html: content.text }}></p>
            <div className={Styles.aboutSection__cardsContainer}>
                <AboutCard title="MARU" ImgSrc={maruCard} content={maruCardContent} />
                <AboutCard title="AGUS" ImgSrc={aguCard} content={agusCardContent} />
            </div>
            <Link className={Styles.aboutSection__link} href="#contact">
                {content.link}
            </Link>
        </section>
    );
}

export default About;
