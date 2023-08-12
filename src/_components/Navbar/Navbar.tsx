"use client";

import React, { useState, useEffect, useReducer } from "react";
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

function Navbar() {
    const [lightTheme, dispatch] = useReducer(reducer, true);
    const [active, setActive] = useState("");
    const [activeLang, setActiveLang] = useState("ES");

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
                    <span className={Styles.navbar__icons__lang} data-active={activeLang === "ES"} onClick={() => setActiveLang("ES")}>
                        ES
                    </span>
                    <span className={Styles.navbar__icons__lang} data-active={activeLang === "EN"} onClick={() => setActiveLang("EN")}>
                        EN
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
