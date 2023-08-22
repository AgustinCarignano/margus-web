import Image from "next/image";
import React from "react";
import Styles from "./home.module.scss";
import Utils from "../../styles/utils.module.scss";
import homeImage from "@public/images/homeImage5.png";

function Home({ option }: { option: string }) {
    return (
        <section className={Styles.homeSection}>
            <div>
                <Image src={homeImage} width={446} height={446} alt="" />
            </div>
            {option === "es" ? (
                <h1>
                    Bienvenido a Margus! <br></br> Somos creadores y diseñamos tu <span className={Utils.highlightedText__fucsia}>página web</span> y{" "}
                    <span className={Utils.highlightedText__aqua}>logo</span> pensados especialmente para vos
                </h1>
            ) : (
                <h1>
                    Welcome to Margus! <br></br> We are ... <span className={Utils.highlightedText__fucsia}>página web</span> y{" "}
                    <span className={Utils.highlightedText__aqua}>logo</span> pensados especialmente para vos
                </h1>
            )}
        </section>
    );
}

export default Home;
