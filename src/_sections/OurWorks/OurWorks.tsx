"use client";

import WorkCard from "@src/_components/WorkCard/WorkCard";
import WorkToggleBtn from "@src/_components/WorkToggleBtn/WorkToggleBtn";
import React, { useState } from "react";
import Styles from "./ourWorks.module.scss";
import imgWorkWeb1 from "../../../public/images/work_web_1.png";
import imgWorkWeb2 from "../../../public/images/work_web_2.png";
import imgWorkWeb4 from "../../../public/images/work_web_4.png";
import imgWorkWeb5 from "../../../public/images/work_web_5.png";
import imgWorkWeb6 from "../../../public/images/work_web_6.png";
import imgWorkDesign1 from "../../../public/images/work_design_1.png";
import imgWorkDesign2 from "../../../public/images/work_design_2.png";
import imgWorkDesign3 from "../../../public/images/work_design_3.png";
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
            { img: imgWorkWeb1, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWorkWeb2, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWork3, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWorkWeb4, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWorkWeb5, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
            { img: imgWorkWeb6, title: "Titulo del trabajo web", text: " - Lo que hicimos" },
        ],
        design: [
            { img: imgWorkDesign1, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
            { img: imgWorkDesign2, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
            { img: imgWorkDesign3, title: "Titulo del trabajo de design", text: " - Lo que hicimos" },
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
