import Image from "next/image";
import React from "react";

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
            <Image src={ImgSrc} width={560} height={560} alt={title} />
            <div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ServicesCard;
