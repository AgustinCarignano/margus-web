import Image from "next/image";
import React from "react";
import wsp from "@public/images/wspIcon.svg";
import env from "@public/images/envIcon.svg";
import Link from "next/link";

function Contact() {
    return (
        <section id="contact">
            <h2>CONTACT</h2>
            <div>
                <div>
                    <Link href={"#"}>
                        <Image src={wsp} width={50} height={50} alt="whatsapp icon" layout="responsive"/>
                    </Link>
                    <p>123 456 789</p>
                </div>
                <div>
                    <Link href={"#"}>
                        <Image src={env} width={50} height={50} alt="email icon" layout="responsive"/>
                    </Link>
                    <p>hello@mail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
