"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./aboutCard.module.scss";

type Props = {
    ImgSrc: string;
    title: string;
    content: string | React.JSX.Element;
};

function AboutCard({ ImgSrc, title, content }: Props) {
    const [turned, setTurned] = useState(false);
    return (
        <div className={`${Styles.card} ${turned && Styles.card__rotate}`} onClick={() => setTurned((prev) => !prev)} onMouseLeave={() => setTurned(false)}>
            {turned ? (
                <div className={Styles.card__back}>
                    <p aria-description={title}>{content}</p>
                </div>
            ) : (
                <div className={Styles.card__front}>
                    <Image src={ImgSrc} width={400} height={400} alt={title} layout="responsive" />
                    <h2>{title}</h2>
                </div>
            )}
        </div>
    );
}

export default AboutCard;

//onMouseMoveCapture={() => setTurned(true)} onMouseLeave={() => setTurned(false)}
