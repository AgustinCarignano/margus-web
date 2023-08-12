"use client";
import Image from "next/image";
import React, { useState } from "react";
import wsp from "@public/images/wspIcon.svg";
import wsp_hover from "@public/images/wspIcon_hover.svg";
import env from "@public/images/envIcon.svg";
import env_hover from "@public/images/envIcon_hover.svg";
import contactImg from "@public/images/contactImage.png";
import Link from "next/link";
import Styles from "./contact.module.scss";

function Contact() {
    const [envHover, setEnvHover] = useState(false);
    const [wspHover, setWspHover] = useState(false);

    // no funcionó lo de las combined clasess :( - llega undefined undefined
    const combinedClassesLeft = `${Styles.contactSection__content} ${Styles["contactSection__content--left"]}`;
    const combinedClassesRight = `${Styles.contactSection__content} ${Styles["contactSection__content--right"]}`;
    return (
        <section className={Styles.contactSection} id="contact">
            <h2 className={Styles.contactSection__title}>CONTACT</h2>
            <div className={Styles.contactSection__content}>
                <div className={Styles.contactSection__content__left}>
                    <Image src={contactImg} width={443} height={446} alt="contact image" />
                </div>
                <div className={Styles.contactSection__content__right}>
                    <div className={Styles.contactSection__content__right__item}>
                        <Link href={"#"} onMouseOver={() => setWspHover(true)} onMouseLeave={() => setWspHover(false)}>
                            {!wspHover ? <Image src={wsp} width={40} height={40} alt="whatsapp icon" /> : <Image src={wsp_hover} width={40} height={40} alt="whatsapp icon" />}
                        </Link>
                        <p>123 456 789</p>
                    </div>
                    <div className={Styles.contactSection__content__right__item}>
                        <Link href={"#"} onMouseOver={() => setEnvHover(true)} onMouseLeave={() => setEnvHover(false)}>
                            {!envHover ? <Image src={env} width={40} height={40} alt="email icon" /> : <Image src={env_hover} width={40} height={40} alt="email icon" />}
                        </Link>
                        <p>hello@mail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
