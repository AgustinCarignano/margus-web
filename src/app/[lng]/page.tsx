import { HomePage, AboutPage, ServicesPage, OurWorksPage } from "@src/_sections";
import Contact from "@src/_sections/Contact/Contact";
import { useTranslation } from "@src/i18n";

type PropsType = {
    params: {
        lng: string;
    };
};

export default async function MainPage({ params: { lng } }: PropsType) {
    const { t } = await useTranslation(lng, "translation");
    return (
        <div>
            <HomePage option={lng} />
            <AboutPage text={t("about")} />
            <ServicesPage />
            <OurWorksPage />
            <Contact />
        </div>
    );
}
