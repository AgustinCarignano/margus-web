"use client";

import React from "react";
import Styles from "./navbar.module.scss";

function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <h3 className={Styles.navbar__logo}>MAGUS</h3>
            <div className={Styles.navbar__container}>
                <ul className={Styles.navbar__links}>
                    <li className={Styles.navbar__links__link}>Home</li>
                    <li className={Styles.navbar__links__link}>About Us</li>
                    <li className={Styles.navbar__links__link}>Our Work</li>
                    <li className={Styles.navbar__links__link}>Contact</li>
                </ul>
                <div className={Styles.navbar__icons}>
                    <span>☀</span>
                    <span>🌙</span>
                    <span>🌐</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
