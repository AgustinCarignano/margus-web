"use client";

import WorkCard from "@src/_components/WorkCard/WorkCard";
import WorkToggleBtn from "@src/_components/WorkToggleBtn/WorkToggleBtn";
import React, { useState } from "react";
import Styles from "./ourWorks.module.scss";
import imgWorkWeb1 from "../../../public/images/work_web_1.png";
import imgWorkWeb2 from "../../../public/images/work_web_2.png";
import imgWork3 from "../../../public/images/work1.png";
import imgWorkWeb4 from "../../../public/images/work_web_4.png";
import imgWorkWeb5 from "../../../public/images/work_web_5.png";
import imgWorkWeb6 from "../../../public/images/work_web_6.png";
import imgWorkDesign1 from "../../../public/images/work_design_1.png";
import imgWorkDesign2 from "../../../public/images/work_design_2.png";
import imgWorkDesign3 from "../../../public/images/work_design_3.png";
import Slider from "@src/_components/Slider/Slider";
import { ILocaleWorks } from "@src/_models/locales.type";

export type WorkOptions = "web" | "design";

function OurWorks({ content }: { content: ILocaleWorks }) {
    const [active, setActive] = useState<WorkOptions>("web");

    function handleClick(option: WorkOptions) {
        setActive(option);
    }

    const worksCards = {
        web: [
            { img: imgWorkWeb1, title: content.card_web_title_1, text: content.card_web_content_1 },
            { img: imgWorkWeb2, title: content.card_web_title_2, text: content.card_web_content_2 },
            { img: imgWork3, title: content.card_web_title_3, text: content.card_web_content_3 },
            { img: imgWorkWeb4, title: content.card_web_title_4, text: content.card_web_content_4 },
            { img: imgWorkWeb5, title: content.card_web_title_5, text: content.card_web_content_5 },
            { img: imgWorkWeb6, title: content.card_web_title_6, text: content.card_web_content_6 },
        ],
        design: [
            { img: imgWorkDesign1, title: content.card_design_title_1, text: content.card_design_content_1 },
            { img: imgWorkDesign2, title: content.card_design_title_2, text: content.card_design_content_2 },
            { img: imgWorkDesign3, title: content.card_design_title_3, text: content.card_design_content_3 },
        ],
    };

    return (
        <section className={Styles.ourWorksSection} id="work">
            <h2 className={Styles.ourWorksSection__title}>{content.title.toUpperCase()}</h2>
            <WorkToggleBtn className={Styles.ourWorksSection__buttons} active={active} setActive={handleClick} />
            <div className={Styles.ourWorksSection__cardsContainer}>
                <Slider>
                    {worksCards[active].map((w, i) => (
                        <WorkCard key={i} title={w.title} text={w.text} img={w.img} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default OurWorks;
