import ServicesCard from "@src/_components/ServicesCard/ServicesCard";
import React from "react";
import Styles from "./services.module.scss";
import service1 from "@public/images/service4.png";
import service2 from "@public/images/service5.png";
import service3 from "@public/images/service6.png";

function Services() {
    const services = [
        {
            name: "Rediseño y asesoramiento para optimización de páginas web existentes",
            text: "En nuestro servicio de Rediseño y Asesoramiento, nos dedicamos a transformar tus páginas web existentes en experiencias digitales modernas y eficientes. Nuestro equipo de expertos en diseño y desarrollo trabaja en estrecha colaboración contigo para entender tus metas y objetivos comerciales. Mediante un enfoque meticuloso, identificamos áreas de mejora y aplicamos las últimas tendencias y técnicas de diseño para optimizar la usabilidad, la estética y el rendimiento de tu sitio web. Ya sea que necesites una actualización visual, una mejor navegación o una mayor velocidad de carga, estamos comprometidos a elevar la presencia en línea de tu negocio a nuevos niveles de excelencia.",
            image: service1,
        },
        {
            name: "Diseño y desarrollo de páginas web a medida",
            text: "En Diseño y Desarrollo de Páginas Web a Medida, creamos soluciones digitales únicas y adaptadas a tus necesidades. Con profesionales altamente capacitados, convertimos tus ideas en una realidad digital impresionante. Desde el diseño estético hasta la funcionalidad intuitiva, nos enfocamos en cada detalle. Ya sea tienda en línea, sitio informativo o plataforma interactiva, impulsamos tu éxito en línea con soluciones web personalizadas.",
            image: service2,
        },
        {
            name: "Diseño y creación de logo",
            text: "Nuestro servicio de Diseño y Creación de Logo da vida a la identidad visual de tu marca. Sabemos que un logo es mucho más que una imagen; es la expresión visual de tus valores y esencia. Nuestro talentoso equipo de diseñadores se sumerge en el corazón de tu marca, creando logotipos distintivos que conectan con tu audiencia. Desde colores y tipografía hasta forma y estilo, cada detalle se diseña con propósito. Confía en nosotros para un logo que hable de tu negocio en voz alta, dejando una huella perdurable en la mente de tus clientes.",
            image: service3,
        },
    ];
    return (
        <section className={Styles.servicesSection} id="services">
            <h2 className={Styles.servicesSection__title}>SERVICES</h2>
            <p className={Styles.servicesSection__text}>
                En [Nombre de tu Empresa], estamos dedicados a brindarte una gama completa de servicios diseñados para satisfacer tus necesidades
                digitales. A continuación, te presentamos algunos de los trabajos que realizamos, pero no dudes en contactarnos si lo que estás
                buscando no encaja exactamente con lo descrito. Estamos seguros de que podemos encontrar la solución perfecta para ti.
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
