import { LocalesPaths } from "@src/_models/locales.enum";
import { LocaleOptions } from "@src/_models/locales.type";
import { HomePage, AboutPage, ServicesPage, OurWorksPage } from "@src/_sections";
import Contact from "@src/_sections/Contact/Contact";
import { getAboutContent, getContactContent, getHomeContent, getServicesContent, getWorksContent } from "@src/_utils/content.utils";
import { asyncTranslation } from "@src/i18n";

type PropsType = {
    params: {
        lng: LocaleOptions;
    };
};

export default async function MainPage({ params: { lng } }: PropsType) {
    const { t: home } = await asyncTranslation(lng, LocalesPaths.HOME);
    const { t: about } = await asyncTranslation(lng, LocalesPaths.ABOUT);
    const { t: services } = await asyncTranslation(lng, LocalesPaths.SERVICES);
    const { t: works } = await asyncTranslation(lng, LocalesPaths.WORKS);
    const { t: contact } = await asyncTranslation(lng, LocalesPaths.CONTACT);
    return (
        <div>
            <HomePage content={getHomeContent(home)} />
            <AboutPage content={getAboutContent(about)} />
            <ServicesPage content={getServicesContent(services)} />
            <OurWorksPage content={getWorksContent(works)} />
            <Contact content={getContactContent(contact)} />
        </div>
    );
}
