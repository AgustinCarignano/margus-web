"use client";
import React, { useState } from "react";
import style from "./slider.module.scss";
import chevron from "@public/images/chevron.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

type Props = {
    children: React.JSX.Element[];
};

function Slider({ children }: Props) {
    const [active, setActive] = useState(0);

    return (
        <div className={style.slider}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        loop: false,
                        navigation: { nextEl: ".controlNext", prevEl: ".controlPrev" },
                        allowTouchMove: false,
                    },
                }}
                onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                loop={true}
                pagination={{ clickable: true, el: ".myPagination" }}
            >
                {children.map((c, i) => (
                    <SwiperSlide key={i} className="slide">
                        {c}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`myPagination ${style.pagination}`}></div>
            <span className={`controlPrev ${style.controls} ${style.controls__prev} ${active === 0 ? style.controls__inactive : ""}`}>
                <Image src={chevron} width={24} height={36} alt="slider control anterior" />
            </span>
            <span
                className={`controlNext ${style.controls} ${style.controls__next} ${active === children.length - 3 ? style.controls__inactive : ""}`}
            >
                <Image src={chevron} width={24} height={36} alt="slider control siguiente" />
            </span>
        </div>
    );
}

export default Slider;

// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log("slide change")}
