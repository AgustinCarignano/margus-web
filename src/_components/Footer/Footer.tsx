import React from "react";
import Styles from "./footer.module.scss";
import heart from "@public/images/heartIcon.svg";
import Image from "next/image";
import Utils from "../../styles/utils.module.scss";
import { asyncTranslation } from "@src/i18n";

async function Footer({ lng }: { lng: string }) {
    const { t } = await asyncTranslation(lng, "translation");
    return (
        <footer className={Styles.footer}>
            <h2 className={Styles.footer__title} dangerouslySetInnerHTML={{ __html: t("footer_thanks") }}></h2>
            <p className={Styles.footer__text}>
                Made with{" "}
                <span>
                    <Image src={heart} width={15} height={13} alt="" />
                </span>{" "}
                <br />
                {t("footer_rights")}
            </p>
        </footer>
    );
}

export default Footer;
