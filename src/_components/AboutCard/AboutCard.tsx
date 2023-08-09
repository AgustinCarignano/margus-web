"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./aboutCard.module.scss";

type Props = {
    ImgSrc: string;
    title: string;
    content: string;
};

function AboutCard({ ImgSrc, title, content }: Props) {
    const [turned, setTurned] = useState(false);
    return (
        <div className={Styles.card}>
            <Image src={ImgSrc} width={400} height={400} alt={title} onMouseMoveCapture={() => setTurned(true)} onMouseLeave={() => setTurned(false)} layout="responsive"/>
            <h2>{title}</h2>
            {turned && <p>{content}</p>}
        </div>
    );
}

export default AboutCard;
