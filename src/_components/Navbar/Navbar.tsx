"use client";

import React, { useState, useEffect, useReducer } from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@src/i18n/settings";
import { useTranslation } from "@src/i18n";
import Styles from "./navbar.module.scss";
import Image from "next/image";
import moon from "@src/../public/images/moonIcon.svg";
import sun from "@src/../public/images/sunIcon.svg";
import doot from "@src/../public/images/switchIcon.svg";
import Link from "next/link";

const reducer = (state: boolean) => {
    document.querySelector("body")?.classList.toggle("theme-dark");
    return !state;
};

function Navbar({ lng }: { lng: string }) {
    const [lightTheme, dispatch] = useReducer(reducer, true);
    const [active, setActive] = useState("");
    // const [activeLang, setActiveLang] = useState("ES");

    const links = ["About", "Services", "Work", "Contact"];
    const switchPosition = lightTheme ? "15px" : "0px";

    return (
        <nav className={Styles.navbar}>
            <span className={Styles.navbar__logo} onClick={() => setActive("")}>
                <Link href="#">MARGUS</Link>
            </span>
            <div className={Styles.navbar__container}>
                <ul className={Styles.navbar__links}>
                    {links.map((item, i) => (
                        <li key={i} className={Styles.navbar__links__link} data-active={active === item} onClick={() => setActive(item)}>
                            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
                <div className={Styles.navbar__icons}>
                    <div className={Styles.navbar__icons__switchOptions}>
                        <Image src={moon} width={12} alt="moon icon" />
                        <span className={`${Styles.navbar__icons__switchButton} switch-btn`} onClick={dispatch}>
                            <Image style={{ transform: `translate(${switchPosition})` }} src={doot} width={12} alt="doot icon" />
                        </span>
                        <Image src={sun} width={12} alt="sun icon" />
                    </div>
                    <span className={Styles.navbar__icons__lang} data-active={lng === "es"}>
                        <Link href="/es">ES</Link>
                    </span>
                    <span className={Styles.navbar__icons__lang} data-active={lng === "en"}>
                        <Link href="/en">EN</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

//  onClick={() => setActiveLang("ES")}
//  onClick={() => setActiveLang("EN")}
