"use client";

import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import Image from "next/image";
import moon from "@src/../public/images/moonIcon.svg";
import sun from "@src/../public/images/sunIcon.svg";
import doot from "@src/../public/images/switchIcon.svg";
import Link from "next/link";
import { getThemePreference, setThemeColors } from "@src/_utils/theme.utils";

function Navbar({ lng }: { lng: string }) {
    const [lightTheme, setLightTheme] = useState(getThemePreference());
    const [active, setActive] = useState("");
    const [visible, setVisible] = useState(false);

    const links = ["About", "Services", "Work", "Contact"];
    const switchPosition = lightTheme ? "15px" : "0px";

    useEffect(() => {
        const listener = () => {
            setVisible(false);
        };
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);

    useEffect(() => {
        localStorage.setItem("themePreference", lightTheme ? "light" : "dark");
        setThemeColors(lightTheme ? "light" : "dark");
    }, [lightTheme]);

    return (
        <nav className={Styles.navbar} id="navbar">
            <div className={Styles.navbar__primaryContainer}>
                <button
                    className={`${Styles.navbar__menu} ${visible ? Styles.navbar__menu__opened : ""}`}
                    onClick={() => setVisible((prev) => !prev)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <span className={Styles.navbar__logo} onClick={() => setActive("")}>
                    <Link href="#" onClick={visible ? () => setVisible((prev) => !prev) : undefined}>
                        MARGUS
                    </Link>
                </span>
            </div>
            <div className={`${Styles.navbar__container} ${visible ? Styles.navbar__container__visible : ""}`}>
                <ul className={Styles.navbar__links}>
                    {links.map((item, i) => (
                        <li key={i} className={Styles.navbar__links__link} data-active={active === item} onClick={() => setActive(item)}>
                            <Link href={`#${item.toLowerCase()}`} onClick={visible ? () => setVisible((prev) => !prev) : undefined}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={Styles.navbar__icons}>
                    <div className={Styles.navbar__icons__switchOptions}>
                        <Image src={moon} width={12} alt="moon icon" />
                        <span className={Styles.navbar__icons__switchButton} onClick={() => setLightTheme((prev) => !prev)}>
                            <Image style={{ transform: `translate(${switchPosition})` }} src={doot} width={12} alt="doot icon" />
                        </span>
                        <Image src={sun} width={12} alt="sun icon" />
                    </div>
                    <div className={Styles.navbar__icons__langContainer}>
                        <span className={Styles.navbar__icons__lang} data-active={lng === "es"}>
                            <Link href="/es">ES</Link>
                        </span>
                        <span className={Styles.navbar__icons__lang} data-active={lng === "en"}>
                            <Link href="/en">EN</Link>
                        </span>
                    </div>
                </div>
                <div
                    className={`${Styles.navbar__closeBox} ${visible ? Styles.navbar__closeBox__active : ""}`}
                    onClick={() => setVisible(false)}
                ></div>
            </div>
        </nav>
    );
}

export default Navbar;

//  onClick={() => setActiveLang("ES")}
//  onClick={() => setActiveLang("EN")}
