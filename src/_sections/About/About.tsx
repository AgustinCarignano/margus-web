import AboutCard from "@src/_components/AboutCard/AboutCard";
import React from "react";
import Link from "next/link";
import { asyncTranslation } from "@src/i18n";
import Styles from "./about.module.scss";
import aguCard from "@public/images/aguCard4.svg";
import maruCard from "@public/images/maruCard3.png";

async function About({ lng }: { lng: string }) {
    const { t } = await asyncTranslation(lng, "translation");
    const maruCardContent = <p aria-description="MARU" dangerouslySetInnerHTML={{ __html: t("about_card_maru") }}></p>;
    const agusCardContent = <p aria-description="AGUS" dangerouslySetInnerHTML={{ __html: t("about_card_agus") }}></p>;
    return (
        <section className={Styles.aboutSection} id="about">
            <h2 className={Styles.aboutSection__title}>{t("about_title").toUpperCase()}</h2>
            <p className={Styles.aboutSection__text} dangerouslySetInnerHTML={{ __html: t("about_text") }}></p>
            <Link className={Styles.aboutSection__link} href="#contact">
                {t("about_link")}
            </Link>
            <div className={Styles.aboutSection__cardsContainer}>
                <AboutCard title="MARU" ImgSrc={maruCard} content={maruCardContent} />
                <AboutCard title="AGUS" ImgSrc={aguCard} content={agusCardContent} />
            </div>
        </section>
    );
}

export default About;
