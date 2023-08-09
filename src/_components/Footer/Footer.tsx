import React from "react";
import Styles from "./footer.module.scss";
import heart from "@public/images/heartIcon.svg";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <h2>Gracias por visitar nuestra página, esperamos volver a verte pronto!</h2>
            <p>
                Made with{" "}
                <span>
                    <Image src={heart} width={13} height={11} alt="" />
                </span>{" "}
                <br />
                Todos los derechos reservados
            </p>
        </footer>
    );
}

export default Footer;
