import Image from "next/image";
import React from "react";
import Styles from "./home.module.scss";
import Utils from "../../styles/utils.module.scss"


function Home() {
    return (
        <section className={Styles.homeSection}>
            <Image src={"/../public/images/homeImage.png"} width={446} height={446} alt="" layout="responsive" />
            <h1>
                Bienvenido a Margus! <br></br> Somos creadores y diseñamos tu <span className={Utils.highlightedText__fucsia}>página web</span> y <span className={Utils.highlightedText__aqua}>logo</span> pensados especialmente para vos
            </h1>
        </section>
    );
}

export default Home;
 