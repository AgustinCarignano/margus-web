"use client";
import style from "./slider.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
    children: React.JSX.Element[];
};

function Slider({ children }: Props) {
    return (
        <div className={style.slider}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{ 1000: { slidesPerView: 3 } }}
                loop={true}
                pagination={{ clickable: true, el: ".myPagination" }}
            >
                {children.map((c, i) => (
                    <SwiperSlide key={i}>{c}</SwiperSlide>
                ))}
            </Swiper>
            <div className={`myPagination ${style.pagination}`}></div>
        </div>
    );
}

export default Slider;

// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log("slide change")}
