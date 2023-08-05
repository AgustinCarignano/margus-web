import Image from "next/image";
import React from "react";

function Home() {
    return (
        <section>
            <Image src={"/../public/images/homeImage.png"} width={562} height={562} alt="" />
            <h3>
                Bienvenido a Margus! Somos creadores y diseñamos tu <span>páginas web</span> y <span>logo</span> pensados especialmente para vos
            </h3>
        </section>
    );
}

export default Home;
