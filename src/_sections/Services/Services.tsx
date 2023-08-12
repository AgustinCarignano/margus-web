import ServicesCard from "@src/_components/ServicesCard/ServicesCard";
import React from "react";
import Styles from "./services.module.scss";

function Services() {
    const services = [
        {
            name: "service 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel luctus justo, feugiat pellentesque mauris. Nullam quis metus quis augue aliquet posuere in in turpis. Donec et sollicitudin tortor. Vestibulum tempus sit amet orci at facilisis. Donec malesuada, velit sit amet tempus rutrum, massa ex egestas libero, nec rhoncus quam magna sed augue. Aenean egestas facilisis rutrum. Aliquam erat volutpat.",
            image: "/../public/images/service1.png",
        },
        {
            name: "service 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel luctus justo, feugiat pellentesque mauris. Nullam quis metus quis augue aliquet posuere in in turpis. Donec et sollicitudin tortor. Vestibulum tempus sit amet orci at facilisis. Donec malesuada, velit sit amet tempus rutrum, massa ex egestas libero, nec rhoncus quam magna sed augue. Aenean egestas facilisis rutrum. Aliquam erat volutpat.",
            image: "/../public/images/service2.png",
        },
        {
            name: "service 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel luctus justo, feugiat pellentesque mauris. Nullam quis metus quis augue aliquet posuere in in turpis. Donec et sollicitudin tortor. Vestibulum tempus sit amet orci at facilisis. Donec malesuada, velit sit amet tempus rutrum, massa ex egestas libero, nec rhoncus quam magna sed augue. Aenean egestas facilisis rutrum. Aliquam erat volutpat.",
            image: "/../public/images/service3.png",
        },
    ];
    return (
        <section className={Styles.servicesSection} id="services">
            <h2 className={Styles.servicesSection__title}>SERVICES</h2>
            <p className={Styles.servicesSection__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel luctus justo, feugiat pellentesque mauris. Nullam quis metus quis
                augue aliquet posuere in in turpis. Donec et sollicitudin tortor. Vestibulum tempus sit amet orci at facilisis. Donec malesuada, velit
                sit amet tempus rutrum, massa ex egestas libero, nec rhoncus quam magna sed augue. Aenean egestas facilisis rutrum. Aliquam erat
                volutpat.
            </p>
            <div className={Styles.servicesSection__cardsContainer}>
                {services.map((s, i) => (
                    <ServicesCard key={i} ImgSrc={s.image} title={s.name} content={s.text} reverse={i % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}

export default Services;
