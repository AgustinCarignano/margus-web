"use client";

import WorkCard from "@src/_components/WorkCard/WorkCard";
import WorkToggleBtn from "@src/_components/WorkToggleBtn/WorkToggleBtn";
import React, { useState } from "react";
import Styles from "./ourWorks.module.scss";
import imgWork1 from "../../../public/images/work1.png";
import imgWork2 from "../../../public/images/work1.png";
import imgWork3 from "../../../public/images/work1.png";
import Slider from "@src/_components/Slider/Slider";

export type WorkOptions = "web" | "design";

function OurWorks({ title }: { title: string }) {
    const [active, setActive] = useState<WorkOptions>("web");

    function handleClick(option: WorkOptions) {
        setActive(option);
    }

    const works = {
        web: [
            { img: imgWork1, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWork2, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWork3, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
        ],
        design: [
            { img: imgWork1, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
            { img: imgWork2, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
            { img: imgWork3, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
        ],
    };

    return (
        <section className={Styles.ourWorksSection} id="work">
            <h2 className={Styles.ourWorksSection__title}>{title.toUpperCase()}</h2>
            <WorkToggleBtn className={Styles.ourWorksSection__buttons} active={active} setActive={handleClick} />
            <div className={Styles.ourWorksSection__cardsContainer}>
                <Slider>
                    {works[active].map((w, i) => (
                        <WorkCard key={i} title={w.title} text={w.text} img={w.img} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default OurWorks;
