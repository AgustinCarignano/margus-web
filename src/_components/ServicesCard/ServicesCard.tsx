import Image from "next/image";
import React from "react";
import Styles from "./servicesCard.module.scss";

type Props = {
    ImgSrc: string;
    title: string;
    content: string;
    reverse: boolean;
};

function ServicesCard({ ImgSrc, title, content, reverse }: Props) {
    const modifier = reverse ? "--reverse" : "";

    //in-line style de prueba
    return (
        <div style={{ display: "flex", flexDirection: `${reverse ? "row-reverse" : "row"}` }}>
            <Image src={ImgSrc} width={560} height={560} alt={title} layout="responsive"/>
            <div className={Styles.cardContainer}>
                <h2 className={Styles.cardContainer__title}>{title}</h2>
                <p className={Styles.cardContainer__title}>{content}</p>
            </div>
        </div>
    );
}

export default ServicesCard;
