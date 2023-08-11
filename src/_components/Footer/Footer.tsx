import React from "react";
import Styles from "./footer.module.scss";
import heart from "@public/images/heartIcon.svg";
import Image from "next/image";
import Utils from "../../styles/utils.module.scss"

function Footer() {
    return (
        <footer className={Styles.footer}>
            <h2 className={Styles.footer__title}><span className={Utils.highlightedText__fucsia}>Gracias</span> por visitar nuestra página, <br />esperamos volver a <span className={Utils.highlightedText__aqua}>verte pronto!</span></h2>
            <p className={Styles.footer__text}>
                Made with{" "}
                <span>
                    <Image src={heart} width={15} height={13} alt="" />
                </span>{" "}
                <br />
                Todos los derechos reservados
            </p>
        </footer>
    );
}

export default Footer;
