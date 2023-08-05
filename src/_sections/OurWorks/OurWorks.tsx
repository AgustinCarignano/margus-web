import WorkCard from "@src/_components/WorkCard/WorkCard";
import React from "react";

function OurWorks() {
    const works = [{ text: "CARD 1 - WORK" }, { text: "CARD 2 - WORK" }, { text: "CARD 3 - WORK" }];
    return (
        <section id="work">
            <h2>LO QUE HACEMOS</h2>
            {works.map((w, i) => (
                <WorkCard key={i} content={w.text} />
            ))}
        </section>
    );
}

export default OurWorks;
