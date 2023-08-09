import WorkCard from "@src/_components/WorkCard/WorkCard";
import WorkToggleBtn from "@src/_components/WorkToggleBtn/WorkToggleBtn";
import React from "react";
import Styles from "./ourWorks.module.scss"

function OurWorks() {
    const works = [{ text: "CARD 1 - WORK" }, { text: "CARD 2 - WORK" }, { text: "CARD 3 - WORK" }];
    return (
        <section className={Styles.ourWorksSection} id="work">
            <h2  className={Styles.ourWorksSection__title}>OUR WORKS</h2>
            <WorkToggleBtn className={""} />
            {works.map((w, i) => (
                <WorkCard key={i} content={w.text} />
            ))}
        </section>
    );
}

export default OurWorks;
