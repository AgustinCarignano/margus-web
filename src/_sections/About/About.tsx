import AboutCard from "@src/_components/AboutCard/AboutCard";
import React from "react";
import Styles from "./about.module.scss";

function About() {
  const maruCardContent = (
    <>
      Hola! Soy<span>Maru</span>🙋🏻‍♀️, creadora por naturaleza. Soy
      <span>diseñadora UX/UI</span>y programadora<span>FrontEnd</span>.Soy una
      <span>apasionada</span>por los<span>detalles</span>creo que marcan la
      diferencia. Amo hacer deporte y la naturaleza. Siempre me vas a encontrar
      creando, en cualquier ámbito de la vida.
    </>
  );
  const agusCardContent = (
    <>
      Hola! Soy <span>Agus</span>, y soy{" "}
      <span>desarrollador Web Full Stack</span>. Me encanta crear sitios web
      atractivos, fáciles de usar y técnicamente eficientes.{" "}
      <span>Analítico y perfeccionista</span> incurable, siempre aprendiendo
      algo nuevo para mejorar mis habilidades.
    </>
  );
  return (
    <section className={Styles.aboutSection} id="about">
      <h2 className={Styles.aboutSection__title}>ABOUT US</h2>
      <p className={Styles.aboutSection__text}>
        En Margus, somos un equipo apasionado de profesionales que crean y
        desarrollan soluciones a medida para impulsar el éxito en el mundo
        digital. Más allá de diseñar páginas web y logotipos, convertimos ideas
        en experiencias cautivadoras y funcionales que reflejan la esencia única
        de cada cliente. Trascendemos lo convencional, tejiendo la identidad en
        cada detalle, desde píxeles hasta líneas de código. Nuestra pasión por
        la excelencia nos impulsa a estar a la vanguardia de las últimas
        tendencias, asegurando soluciones innovadoras para cada proyecto. Hemos
        colaborado con clientes inspiradores en diversas industrias,
        enriqueciendo nuestro enfoque creativo. Nuestra satisfacción radica en
        el éxito y la relación sólida que construimos contigo. En Margus,
        estamos listos para ser parte de tu viaje hacia la excelencia digital.
        ¡Únete a nosotros y transforma tus ideas en realidad!
      </p>
      <div className={Styles.aboutSection__cardsContainer}>
        <AboutCard
          title="MARU"
          ImgSrc="/../public/images/maruCard2.png"
          content={maruCardContent}
        />
        <AboutCard
          title="AGUS"
          ImgSrc="/../public/images/objetivo2.png"
          content={agusCardContent}
        />
      </div>
    </section>
  );
}

export default About;
