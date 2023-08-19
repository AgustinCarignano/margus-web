import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "./servicesCard.module.scss";

type Props = {
    ImgSrc: string | StaticImageData;
    title: string;
    content: string;
    reverse: boolean;
};

function ServicesCard({ ImgSrc, title, content, reverse }: Props) {
    // const modifier = reverse ? "--reverse" : "";

    //in-line style de prueba
    return (
        <div className={`${Styles.card} ${reverse ? Styles.card__reverse : ""}`}>
            <Image src={ImgSrc} width={560} height={560} alt={title} className={Styles.card__img} />
            <div className={Styles.card__container}>
                <h2 className={Styles.card__container__title}>{title}</h2>
                <p className={Styles.card__container__text}>{content}</p>
            </div>
        </div>
    );
}

export default ServicesCard;

// style={{ display: "flex", flexDirection: `${reverse ? "row-reverse" : "row"}` }}
