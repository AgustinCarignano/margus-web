import ServicesCard from "@src/_components/ServicesCard/ServicesCard";
import React from "react";
import Styles from "./services.module.scss";
import service1 from "@public/images/service4.png";
import service2 from "@public/images/service5.png";
import service3 from "@public/images/service6.png";
import { ILocaleServices } from "@src/_models/locales.type";

async function Services({ content }: { content: ILocaleServices }) {
    const services = [
        {
            name: content.card_title_1,
            text: content.card_text_1,
            buttonLabel: content.button,
            image: service1,
        },
        {
            name: content.card_title_2,
            text: content.card_text_2,
            buttonLabel: content.button,
            image: service2,
        },
        {
            name: content.card_title_3,
            text: content.card_text_3,
            buttonLabel: content.button,
            image: service3,
        },
    ];
    return (
        <section className={Styles.servicesSection} id="services">
            <h2 className={Styles.servicesSection__title}>{content.title.toUpperCase()}</h2>
            <p className={Styles.servicesSection__text}>{content.text}</p>
            <div className={Styles.servicesSection__cardsContainer}>
                {services.map((s, i) => (
                    <ServicesCard key={i} ImgSrc={s.image} title={s.name} content={s.text} buttonLabel={s.buttonLabel} reverse={i % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}

export default Services;
