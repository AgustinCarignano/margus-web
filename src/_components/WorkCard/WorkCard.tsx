"use client";
import React from "react";
import Styles from "./workCard.module.scss";

type Props = {
    text: string;
    img: any;
    title: string;
};

export default function WorkCard({ text, img, title }: Props) {
    const backgroundImageStyle = {
        backgroundImage: `url(${img.src})`,
    };
    return (
        <div className={`${Styles.cardContainer} `} style={backgroundImageStyle}>
            <div className={Styles.overlay} /> {/* Capa semi-transparente */}
            <h2 className={Styles.cardContainer__content}>{title}</h2>
            <p className={Styles.cardContainer__content}>{text}</p>
        </div>
    );
}
