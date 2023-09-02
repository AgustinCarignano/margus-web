"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Styles from "./aboutCard.module.scss";
import handClick from "@public/images/handClick.svg";
import handClickSmall from "@public/images/handClickSmall.svg";

type Props = {
    ImgSrc: string | StaticImageData;
    title: string;
    content: string | React.JSX.Element;
};
function AboutCard({ ImgSrc, title, content }: Props) {
    const [turned, setTurned] = useState(false);

    return (
        <div
            className={`${Styles.card} ${turned && Styles.card__rotate}`}
            onClick={() => setTurned((prev) => !prev)}
            onMouseLeave={() => setTurned(false)}
        >
            {turned ? (
                <div className={Styles.card__back}>{content}</div>
            ) : (
                <div className={Styles.card__front}>
                    <Image src={ImgSrc} width={400} height={400} alt={title} className={Styles.card__front__img} />
                    <Image src={handClick} width={80} height={80} alt="hand clic icon" className={Styles.card__front__icon} />
                    <Image src={handClickSmall} width={28} height={28} alt="hand clic icon" className={Styles.card__front__icon__small} />
                    <h2 aria-description={title}>
                        <span>{title}</span>
                    </h2>
                </div>
            )}
        </div>
    );
}

export default AboutCard;

//onMouseMoveCapture={() => setTurned(true)} onMouseLeave={() => setTurned(false)}
