import ServicesCard from "@src/_components/ServicesCard/ServicesCard";
import React from "react";
import { useTranslation } from "@src/i18n";
import Styles from "./services.module.scss";
import service1 from "@public/images/service4.png";
import service2 from "@public/images/service5.png";
import service3 from "@public/images/service6.png";

async function Services({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng, "translation");
    const services = [
        {
            name: t("services_card_title_1"),
            text: t("services_card_text_1"),
            image: service1,
        },
        {
            name: t("services_card_title_2"),
            text: t("services_card_text_2"),
            image: service2,
        },
        {
            name: t("services_card_title_3"),
            text: t("services_card_text_3"),
            image: service3,
        },
    ];
    return (
        <section className={Styles.servicesSection} id="services">
            <h2 className={Styles.servicesSection__title}>{t("services_title").toUpperCase()}</h2>
            <p className={Styles.servicesSection__text}>{t("services_text")}</p>
            <div className={Styles.servicesSection__cardsContainer}>
                {services.map((s, i) => (
                    <ServicesCard key={i} ImgSrc={s.image} title={s.name} content={s.text} reverse={i % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}

export default Services;
