"use client";
import Styles from "./workToggleBtn.module.scss";
import React, { useState } from "react";

type Options = "web" | "design";

function WorkToggleBtn({ className }: { className: string }) {
    const [active, setActive] = useState<Options>("web");
    function handleClick(option: Options) {
        setActive(option);
    }

    return (
        <div className={className}>
            <button className={`${Styles.button} ${Styles.button__left} ${active === "web" ? Styles.button__active : ""}`} onClick={() => handleClick("web")}>
                WEB
            </button>
            <button className={`${Styles.button} ${Styles.button__right} ${active === "design" ? Styles.button__active : ""}`} onClick={() => handleClick("design")}>
                DESIGN
            </button>
        </div>
    );
}

export default WorkToggleBtn;
