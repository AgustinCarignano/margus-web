import React from "react";
import Styles from "./footer.module.scss";
import heart from "@public/images/heartIcon.svg";
import Image from "next/image";
import { ILocaleGenerals } from "@src/_models/locales.type";

async function Footer({ content }: { content: ILocaleGenerals }) {
    return (
        <footer className={Styles.footer}>
            <h2 className={Styles.footer__title} dangerouslySetInnerHTML={{ __html: content.footer_thanks }}></h2>
            <p className={Styles.footer__text}>
                Made with{" "}
                <span>
                    <Image src={heart} width={15} height={13} alt="" />
                </span>{" "}
                <br />
                {content.footer_rights}
            </p>
        </footer>
    );
}

export default Footer;
