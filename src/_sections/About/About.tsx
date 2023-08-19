import AboutCard from "@src/_components/AboutCard/AboutCard";
import React from "react";
import Styles from "./about.module.scss";
import aguCard from "@public/images/aguCard4.svg";
import maruCard from "@public/images/maruCard3.png";

async function About({ text }: { text: string }) {
    const maruCardContent = (
        <>
            Hola! Soy<span>Maru</span>🙋🏻‍♀️, creadora por naturaleza. Soy
            <span>diseñadora UX/UI</span>y programadora<span>FrontEnd</span>.Soy una
            <span>apasionada</span>por los<span>detalles</span>creo que marcan la diferencia. Amo hacer deporte y la naturaleza. Siempre me vas a
            encontrar creando, en cualquier ámbito de la vida.
        </>
    );
    const agusCardContent = (
        <>
            Hola! Soy <span>Agus</span>, y soy <span>desarrollador Web Full Stack</span>. Me encanta crear sitios web atractivos, fáciles de usar y
            técnicamente eficientes. <span>Analítico y perfeccionista</span> incurable, siempre aprendiendo algo nuevo para mejorar mis habilidades.
        </>
    );
    return (
        <section className={Styles.aboutSection} id="about">
            <h2 className={Styles.aboutSection__title}>ABOUT US</h2>
            <p className={Styles.aboutSection__text}>{text}</p>
            <div className={Styles.aboutSection__cardsContainer}>
                <AboutCard title="MARU" ImgSrc={maruCard} content={maruCardContent} />
                <AboutCard title="AGUS" ImgSrc={aguCard} content={agusCardContent} />
            </div>
        </section>
    );
}

export default About;
