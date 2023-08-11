import WorkCard from "@src/_components/WorkCard/WorkCard";
import WorkToggleBtn from "@src/_components/WorkToggleBtn/WorkToggleBtn";
import React from "react";
import Styles from "./ourWorks.module.scss";
import imgWork1 from "../../../public/images/work1.png";
import imgWork2 from "../../../public/images/work1.png";
import imgWork3 from "../../../public/images/work1.png";

function OurWorks() {
    const works = [
        { img: imgWork1, title: "Titulo del trabajo", text: " - Lo que hicimos" },
        { img: imgWork2, title: "Titulo del trabajo", text: " - Lo que hicimos" },
        { img: imgWork3, title: "Titulo del trabajo", text: " - Lo que hicimos" },
    ];
    return (
        <section className={Styles.ourWorksSection} id="work">
            <h2 className={Styles.ourWorksSection__title}>OUR WORKS</h2>
            <WorkToggleBtn className={Styles.ourWorksSection__buttons} />
            <div className={Styles.ourWorksSection__cardsContainer}>
                {works.map((w, i) => (
                    <WorkCard key={i} title={w.title} text={w.text} img={w.img} />
                ))}
            </div>
        </section>
    );
}

export default OurWorks;
