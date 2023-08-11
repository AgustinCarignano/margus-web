'use client'
import React, { useState } from "react";
import Styles from "./workCard.module.scss"

type Props = {
    text: string;
    img: any;
    title: string;
};

export default function WorkCard({ text, img, title }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const backgroundImageStyle = {
        backgroundImage: `url(${img.src})`
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className={`${Styles.cardContainer} ${isHovered ? Styles.slideDown : ""}`}
            style={backgroundImageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={Styles.overlay} /> {/* Capa semi-transparente */}
            <h3 className={Styles.cardContainer__content}>{title}</h3>
            <p className={Styles.cardContainer__content}>{text}</p>
        </div>
    );
}
