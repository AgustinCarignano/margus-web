import { HomePage, AboutPage, ServicesPage, OurWorksPage } from "@src/_sections";
import Contact from "@src/_sections/Contact/Contact";
import { asyncTranslation } from "@src/i18n";

type PropsType = {
    params: {
        lng: string;
    };
};

export default async function MainPage({ params: { lng } }: PropsType) {
    const { t } = await asyncTranslation(lng, "translation");
    return (
        <div>
            <HomePage option={lng} />
            <AboutPage lng={lng} />
            <ServicesPage lng={lng} />
            <OurWorksPage title={t("works_title")} />
            <Contact title={t("contact_title")} />
        </div>
    );
}
