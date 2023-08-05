"use client";

import React, { useState } from "react";
import Styles from "./navbar.module.scss";
import Image from "next/image";
import moon from "@src/../public/images/moonIcon.svg";
import sun from "@src/../public/images/sunIcon.svg";
import doot from "@src/../public/images/switchIcon.svg";
import Link from "next/link";

function Navbar() {
    const [lightTheme, setLightTheme] = useState(true);

    const links = ["About", "Services", "Work", "Contact"];
    const switchPosition = lightTheme ? "17px" : "0px";
    return (
        <nav className={Styles.navbar}>
            <h3 className={Styles.navbar__logo}>
                <Link href="#">MARGUS</Link>
            </h3>
            <div className={Styles.navbar__container}>
                <ul className={Styles.navbar__links}>
                    {links.map((item, i) => (
                        <li key={i} className={Styles.navbar__links__link}>
                            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
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
                    <span className={Styles.navbar__icons__langEs}>ES</span>
                    <span className={Styles.navbar__icons__langEn}>EN</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
