import AboutCard from "@src/_components/AboutCard/AboutCard";
import React from "react";
import Styles from "./about.module.scss";

function About() {
    const maruCardContent = "Hola! Soy Maru 🙋🏻‍♀️, creadora por naturaleza. Soy diseñadora UX/UI y programadora FrontEnd. Soy una apasionada por los detalles, creo que marcan la diferencia. Amo hacer deporte y la naturaleza. Siempre me vas a encontrar creando, en cualquier ámbito de la vida.";
    const agusCardContent = "Hola! Soy Agus, y soy desarrollador Web Full Stack. Me encanta crear sitios web atractivos, fáciles de usar y técnicamente eficientes. Analítico y perfeccionista incurable, siempre aprendiendo algo nuevo para mejorar mis habilidades.";
    return (
        <section className={Styles.aboutSection} id="about">
            <h2 className={Styles.aboutSection__title}>ABOUT US</h2>
            <p className={Styles.aboutSection__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel luctus justo, feugiat pellentesque mauris. Nullam quis metus quis augue aliquet posuere in in turpis. Donec et sollicitudin tortor. Vestibulum tempus sit amet orci at facilisis. Donec malesuada, velit sit amet tempus rutrum, massa ex egestas libero, nec rhoncus quam magna sed augue. Aenean egestas facilisis rutrum. Aliquam erat volutpat.</p>
            <div className={Styles.aboutSection__cardsContainer}>
                <AboutCard title="MARU" ImgSrc="/../public/images/maruCard.png" content={maruCardContent} />
                <AboutCard title="AGUS" ImgSrc="/../public/images/aguCard.png" content={agusCardContent} />
            </div>
        </section>
    );
}

export default About;
