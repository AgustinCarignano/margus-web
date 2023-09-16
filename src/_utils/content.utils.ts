import { TFunction } from "i18next";
import { LocalesAbout, LocalesContact, LocalesGenerals, LocalesHome, LocalesServices, LocalesWorks } from "../_models/locales.enum";
import { ILocaleAbout, ILocaleContact, ILocaleGenerals, ILocaleHome, ILocaleServices, ILocaleWorks } from "@src/_models/locales.type";

export function getGeneralContent(t: TFunction<any, string>): ILocaleGenerals {
    return {
        navbar_about: t(LocalesGenerals.NAVBAR_ABOUT),
        navbar_services: t(LocalesGenerals.NAVBAR_SERVICES),
        navbar_works: t(LocalesGenerals.NAVBAR_WORKS),
        navbar_contact: t(LocalesGenerals.NAVBAR_CONTACT),
        footer_thanks: t(LocalesGenerals.FOOTER_THANKS),
        footer_rights: t(LocalesGenerals.FOOTER_RIGHTS),
    };
}

export function getHomeContent(t: TFunction<any, string>): ILocaleHome {
    return { title: t(LocalesHome.TITLE) };
}

export function getAboutContent(t: TFunction<any, string>): ILocaleAbout {
    return {
        title: t(LocalesAbout.TITLE),
        text: t(LocalesAbout.TEXT),
        link: t(LocalesAbout.LINK),
        card_maru: t(LocalesAbout.CARD_MARU),
        card_agus: t(LocalesAbout.CARD_AGUS),
    };
}

export function getServicesContent(t: TFunction<any, string>): ILocaleServices {
    return {
        title: t(LocalesServices.TITLE),
        text: t(LocalesServices.TEXT),
        button: t(LocalesServices.BUTTON),
        card_title_1: t(LocalesServices.CARD_TITLE_1),
        card_text_1: t(LocalesServices.CARD_TEXT_1),
        card_title_2: t(LocalesServices.CARD_TITLE_2),
        card_text_2: t(LocalesServices.CARD_TEXT_2),
        card_title_3: t(LocalesServices.CARD_TITLE_3),
        card_text_3: t(LocalesServices.CARD_TEXT_3),
    };
}

export function getWorksContent(t: TFunction<any, string>): ILocaleWorks {
    return {
        title: t(LocalesWorks.TITLE),
        card_web_title_1: t(LocalesWorks.CARD_WEB_TITLE_1),
        card_web_content_1: t(LocalesWorks.CARDS_WEB_CONTENT_1),
        card_web_title_2: t(LocalesWorks.CARD_WEB_TITLE_2),
        card_web_content_2: t(LocalesWorks.CARDS_WEB_CONTENT_2),
        card_web_title_3: t(LocalesWorks.CARD_WEB_TITLE_3),
        card_web_content_3: t(LocalesWorks.CARDS_WEB_CONTENT_3),
        card_web_title_4: t(LocalesWorks.CARD_WEB_TITLE_4),
        card_web_content_4: t(LocalesWorks.CARDS_WEB_CONTENT_4),
        card_web_title_5: t(LocalesWorks.CARD_WEB_TITLE_5),
        card_web_content_5: t(LocalesWorks.CARDS_WEB_CONTENT_5),
        card_web_title_6: t(LocalesWorks.CARD_WEB_TITLE_6),
        card_web_content_6: t(LocalesWorks.CARDS_WEB_CONTENT_6),
        card_design_title_1: t(LocalesWorks.CARD_DESIGN_TITLE_1),
        card_design_content_1: t(LocalesWorks.CARDS_DESIGN_CONTENT_1),
        card_design_title_2: t(LocalesWorks.CARD_DESIGN_TITLE_2),
        card_design_content_2: t(LocalesWorks.CARDS_DESIGN_CONTENT_2),
        card_design_title_3: t(LocalesWorks.CARD_DESIGN_TITLE_3),
        card_design_content_3: t(LocalesWorks.CARDS_DESIGN_CONTENT_3),
    };
}

export function getContactContent(t: TFunction<any, string>): ILocaleContact {
    return {
        title: t(LocalesContact.TILE),
    };
}
