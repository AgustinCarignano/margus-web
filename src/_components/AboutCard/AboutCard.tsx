"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
    ImgSrc: string;
    title: string;
    content: string;
};

function AboutCard({ ImgSrc, title, content }: Props) {
    const [turned, setTurned] = useState(false);
    return (
        <div>
            <Image src={ImgSrc} width={400} height={400} alt={title} onMouseMoveCapture={() => setTurned(true)} onMouseLeave={() => setTurned(false)} />
            <h3>{title}</h3>
            {turned && <p>{content}</p>}
        </div>
    );
}

export default AboutCard;
