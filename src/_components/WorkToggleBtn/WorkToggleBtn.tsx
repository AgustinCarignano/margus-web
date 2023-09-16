"use client";

import { WorkOptions } from "@src/_sections/OurWorks/OurWorks";
import Styles from "./workToggleBtn.module.scss";
import React from "react";

type Props = {
    className: string;
    active: any;
    setActive: (options: WorkOptions) => void;
};

function WorkToggleBtn({ className, active, setActive }: Props) {
    return (
        <div className={className}>
            <button
                className={`${Styles.button} ${Styles.button__left} ${active === "web" ? Styles.button__active : ""}`}
                onClick={() => setActive("web")}
            >
                WEB
            </button>
            <button
                className={`${Styles.button} ${Styles.button__right} ${active === "design" ? Styles.button__active : ""}`}
                onClick={() => setActive("design")}
            >
                DESIGN
            </button>
        </div>
    );
}

export default WorkToggleBtn;
