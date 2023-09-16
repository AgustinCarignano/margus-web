export type LocaleOptions = "es" | "en";

export interface ILocaleGenerals {
    navbar_about: string;
    navbar_services: string;
    navbar_works: string;
    navbar_contact: string;
    footer_thanks: string;
    footer_rights: string;
}

export interface ILocaleHome {
    title: string;
}

export interface ILocaleAbout {
    title: string;
    text: string;
    link: string;
    card_maru: string;
    card_agus: string;
}

export interface ILocaleServices {
    title: string;
    text: string;
    button: string;
    card_title_1: string;
    card_text_1: string;
    card_title_2: string;
    card_text_2: string;
    card_title_3: string;
    card_text_3: string;
}

export interface ILocaleWorks {
    title: string;
    card_web_title_1: string;
    card_web_content_1: string;
    card_web_title_2: string;
    card_web_content_2: string;
    card_web_title_3: string;
    card_web_content_3: string;
    card_web_title_4: string;
    card_web_content_4: string;
    card_web_title_5: string;
    card_web_content_5: string;
    card_web_title_6: string;
    card_web_content_6: string;
    card_design_title_1: string;
    card_design_content_1: string;
    card_design_title_2: string;
    card_design_content_2: string;
    card_design_title_3: string;
    card_design_content_3: string;
}

export interface ILocaleContact {
    title: string;
}
